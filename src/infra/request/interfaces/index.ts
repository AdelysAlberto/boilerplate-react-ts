
import { AxiosRequestHeaders } from 'axios';

export interface IResponseRequest {
  data?: any;
  status: number;
  statusText?: string;
}

export interface IAxiosError {
  response: {
    data: { message: string, error?: string },
    statusText?: string,
    status: number
  }
}
export type TBody = BodyInit | Record<string, unknown>;

export interface IRequest {
  get: (url: string, headers?: AxiosRequestHeaders) => Promise<IResponseRequest>
  post: (url: string, body: TBody, header?: AxiosRequestHeaders) => Promise<IResponseRequest>
}

