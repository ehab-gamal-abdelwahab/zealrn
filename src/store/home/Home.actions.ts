import {User, Users} from '../../types/users.type';
import {Locations} from '../../types/locations.type';

export const HOME_START = 'HOME_START';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAIL = 'USERS_FAIL';
export const LOCATIONS_SUCCESS = 'LOCATIONS_SUCCESS';
export const LOCATIONS_FAIL = 'LOCATIONS_FAIL';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';
export const SELECTED_USER = 'SELECTED_USER';

export const homeStart = (payload: string) => {
  return {
    type: HOME_START,
    payload,
  };
};

export const usersSuccess = (payload: Users) => {
  return {
    type: USERS_SUCCESS,
    payload,
  };
};

export const usersFail = (payload: any) => {
  return {
    type: USERS_FAIL,
    payload,
  };
};

export const locationsSuccess = (payload: Locations) => {
  return {
    type: LOCATIONS_SUCCESS,
    payload,
  };
};

export const locationsFail = (payload: any) => {
  return {
    type: LOCATIONS_FAIL,
    payload,
  };
};

export const deleteUser = (payload: any) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

export const deleteUserSuccess = (payload: any) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload,
  };
};

export const deleteUserFail = (payload: any) => {
  return {
    type: DELETE_USER_FAIL,
    payload,
  };
};

export const selectedUser = (payload: User) => {
  return {
    type: SELECTED_USER,
    payload,
  };
};
