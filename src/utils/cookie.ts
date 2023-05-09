import Cookie from 'js-cookie';

export function setCookie(name: string, value: string, expires = 0) {
  if (expires > 0) {
    Cookie.set(name, value, { expires: expires, sameSite: 'Strict' });
  } else {
    Cookie.set(name, value);
  }
}

export function getCookie(name: string) {
  return Cookie.get(name);
}

export function removeCookie(name: string) {
  Cookie.remove(name);
}
