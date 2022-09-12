import axios from 'axios';

import { IAxiosError, IRequest } from './interfaces/index';
import { loadAbort } from '../../utilities/loadAbort.utility';


const request: IRequest = {
  get: async (url, headers) => {
    const controller = loadAbort();
    const config = {
      headers,
      signal: controller.signal
    };
    try {
      const response = await axios.get(url, config);
      const { status, data } = response;      
      return { data, status };
    }
    catch (err) {
      console.log(err);
      const { response } = err as IAxiosError;
      const status = response?.status;
      const statusText = response?.data.message;
      return {
        status,
        statusText
      };
    }
  },

  post: async (url, body, header) => {
    try {
      const headers = {
        ...header,
        "Content-Type": "application/json",
      };
      //send headers and request to URL
      const response = await axios({
        method: "post",
        url: url,
        data: body,
        headers: { ...headers }
      });
      const { data, status } = response;

      return { data, status };
    } catch (err) {
      console.log(err)
      //authentication_required
      const { response } = err as IAxiosError;
      const status = response?.status;
      const statusText = response?.data.message || response?.data.error || response?.statusText;

      if (statusText === 'authentication_required') {
        window.location.href = '/login'
      }

      return {
        status,
        statusText
      };
    }
  }

}

export default request;
