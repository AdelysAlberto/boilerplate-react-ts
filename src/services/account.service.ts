import request from "../infra/request"
import configEnv from '../utilities/config.utility';
import { setStorage } from "../infra/store/localStorage";

const LoginUser = async (payload: any) => {
  try {

    const { data, statusText } = await request.post(configEnv.baseUrl, payload);
    if (statusText) return { statusText };
    setStorage('userStorage', data);
    return data;

  } catch (e) {
    return { statusText: e }
  }
}


export {
  LoginUser
}