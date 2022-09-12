import { getStorage } from '../infra/store/localStorage';

var timerInterval: any | null;
var bGettingStatus = false;

const useScriptKYC = (callbakFn: (statusCode: string, iResult: number) => void) => {
  const script = document.createElement('script');
  const user = getStorage('userStorage');

  const loadScript = async (url: string) => {
    script.src = url;
    script.async = false;

    document.body.appendChild(script);

    const metamapButton = document.createElement("mati-button");
    metamapButton.setAttribute("clientId", `${process.env.REACT_APP_MATI_CLIENT_ID}`);
    metamapButton.setAttribute("flowId", `${process.env.REACT_APP_MATI_FLOW_ID}`);
    metamapButton.setAttribute("metadata", `{"kyc_id":"${user?.idKycDocument}", "jwt":"${user?.jwt}", "fixedLanguage":"es"}`);

    const metamapDiv = document.getElementById("divMatiButton");
    if (metamapDiv)
      metamapDiv.appendChild(metamapButton);
    else
      console.log("NO SE PUDO CARGAR METAMAP!!!");
  }

  const subscribeEvents = () => {
    const element: any = document.getElementsByTagName("mati-button");
    if (element.length > 0) {
      element[0].click();

      element[0].addEventListener('mati:loaded', ({ detail }: any) => {
        console.log('>>>>>> MODULE Loaded', detail);
      })
      element[0].addEventListener('mati:userFinishedSdk', ({ detail }: any) => {
        getStatusAsync(`${user?.jwt}`, callbakFn);
        console.log('>>>>>> FLOW Finished', detail);
      })
      element[0].addEventListener('mati:exitedSdk', ({ detail }: any) => {
        callbakFn('abandoned', -99);
        console.log('>>>>>> FLOW Abandoned', detail);
      })
    }
  }

  const removeScript = () => {
    const element = document.getElementsByTagName("mati-button");
    if (element.length > 0) {
      element[0]?.parentNode?.removeChild(element[0]);
    }
    document.body.removeChild(script);
  }

  return { loadScript, removeScript, subscribeEvents }
};

function getStatusAsync(jwt: string, callback: (statusCode: string, i: number) => void) {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('Authorization', `Bearer ${jwt}`);
  let sURLBase = `${process.env.REACT_APP_API_URL}`;

  timerInterval = setInterval(() => {

    if (!bGettingStatus) {
      bGettingStatus = true;
      console.log('Consultando Status', timerInterval);

      fetch(`${sURLBase}/api/users/getKycStatus`, {
        method: 'GET',
        cache: 'no-cache',
        headers: requestHeaders
      })
        .then(res => res.json())
        .then((res: any) => {
          console.log('Status RES', res);
          if (res?.idKycDocumentsStatus) {
            console.log('Status', res.idKycDocumentsStatus);
            switch (res.idKycDocumentsStatus) {
              case 1:
                callback('missingPhotos', 0);
                break;
              case 2:
              case 3:
                bGettingStatus = false;
                callback('processing', 1);
                break;
              case 5:
                stopPooling();
                callback('manual', 2);
                break;
              case 10:
              case 11:
              case 12:
                stopPooling(); //No deberia tener uno de estos estados si llego al KYC
                callback('profileData', -2);
                break;
              case 20:
              case 21:
                bGettingStatus = false;
                callback('setingUp', 3);
                break;
              case 90:
                stopPooling();
                callback('blocked', -1);
                break;
              case 4:
                stopPooling();
                callback('done', 4);
                break;
            }
          }
          else {
            console.log("NO KYC STATUS");
            stopPooling();

            callback('notFound', -1);
          }
        })
        .catch(e => {
          console.log("CATCH", e);
          stopPooling();
          callback('error', -1);
        });
    }
  }, 5000);
}

function stopPooling() {
  console.log("stop pooling");
  clearInterval(timerInterval);
  bGettingStatus = false;
}

export default useScriptKYC;
