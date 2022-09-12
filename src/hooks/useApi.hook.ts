import { useCallback, useState } from "react";
import { TBody } from "../infra/request/interfaces";

const useApi = () => {
  const [data, setData] = useState<any>();
  const [errorApi, setErrorApi] = useState();
  const [isLoading, setLoading] = useState(false);

  const handleApi = useCallback(
    (body: TBody, apiFunction: any) => {
      setLoading(true);
      apiFunction(body)
        .then((res: any) => res)
        .then((response: any) => {
          if (response.statusText) {
            setErrorApi(response.statusText);
            return;
          }
          setData(response);
        })
        .catch((e: any) => {
          setErrorApi(e.statusText);
        })
        .finally(() => setLoading(false));
    }, []
  );

  return { data, errorApi, isLoading, handleApi };
};

export default useApi;