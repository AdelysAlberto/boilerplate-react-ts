
export const validateEmail = (email: string) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const bVALID = email.match(mailFormat);
  return bVALID;
}

export const validatePassword = (value: string) => {
  return value.length >= 8;
};

export const validateInput = (value: string, length: number = 8) => {
  return value.length >= length;
};
