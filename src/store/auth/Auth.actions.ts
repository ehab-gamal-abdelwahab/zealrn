import {Auth, UserData} from '../../types/auth.type';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const authStart = (payload: UserData) => ({
  type: AUTH_START,
  payload,
});

export const authSuccess = (payload: Auth) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authFail = (payload: any) => ({
  type: AUTH_FAIL,
  payload,
});
