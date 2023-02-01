import Cookies from "universal-cookie";

const generalOptions = { path: "/" };

export const setCookie = (key, value) => {
  const cookies = new Cookies();
  cookies.set(key, value, generalOptions);
};

export const getCookie = (key) => {
  const cookies = new Cookies();
  return cookies.get(key);
};

export const removeCookie = (key) => {
  const cookies = new Cookies();
  cookies.remove(key, generalOptions);
};

export const getAllCookies = () => {
  const cookies = new Cookies();
  return cookies.getAll(generalOptions);
};
