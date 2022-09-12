import { useEffect, useState } from "react";

import request from "../infra/request";
import { IResponseRequest, TBody } from "../infra/request/interfaces";
import { AxiosRequestHeaders } from 'axios';

const usePost = (url: string, body: TBody, headers?: AxiosRequestHeaders) => {
  const [data, setData] = useState<IResponseRequest>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request.post(url, body, headers)
      .then(response => response)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url, body, headers])

  return { data, error, loading };
};

export default usePost;