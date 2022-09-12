import { useEffect, useState } from "react";
import { AxiosRequestHeaders } from 'axios';
import request from "../infra/request";
import { IResponseRequest } from '../infra/request/interfaces/index';

const useFetch = (url: string, headers?: AxiosRequestHeaders) => {
  const [data, setData] = useState<IResponseRequest>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    request.get(url, headers)
      .then(response => response)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url, headers])

  return { data, loading, error };
};

export default useFetch;