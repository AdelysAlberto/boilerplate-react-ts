import { IUser } from "./interface";

export const setStorage = (nameStorage: string, payload: any) => {
  localStorage.setItem(nameStorage, JSON.stringify(payload));
}

export const setStorage_mobileNumber = (nameStorage: string, value: any) => {
  let data = getStorage(nameStorage);
  if (data) data.mobileNumber = value;
  localStorage.setItem(nameStorage, JSON.stringify(data));
}


export const getStorage = (nameStorage: string): IUser | null => {
  let data = localStorage.getItem(nameStorage);
  if (!data) return null;
  return JSON.parse(data);
}


export const destroyStorage = () => {
  let data = localStorage.getItem('userStorage');
  if (data) localStorage.clear();
}