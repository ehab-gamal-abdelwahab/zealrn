import {Location, Locations} from '../../types/locations.type';

export const DETAILS_START = 'DETAILS_START';
export const USER_LOCATIONS_SUCCESS = 'USER_LOCATIONS_SUCCESS';
export const USER_LOCATIONS_FAIL = 'USER_LOCATIONS_FAIL';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const DELETE_LOCATION_SUCCESS = 'DELETE_LOCATION_SUCCESS';
export const DELETE_LOCATION_FAIL = 'DELETE_LOCATION_FAIL';

export const detailsStart = (payload: any) => ({
  type: DETAILS_START,
  payload,
});

export const userLocationsSuccess = (payload: Locations) => ({
  type: USER_LOCATIONS_SUCCESS,
  payload,
});

export const userLocationsFail = (payload: any) => ({
  type: USER_LOCATIONS_FAIL,
  payload,
});

export const deleteLocation = (payload: any) => {
  return {
    type: DELETE_LOCATION,
    payload,
  };
};

export const deleteLocationSuccess = (payload: any) => {
  return {
    type: DELETE_LOCATION_SUCCESS,
    payload,
  };
};

export const deleteLocationFail = (payload: any) => {
  return {
    type: DELETE_LOCATION_FAIL,
    payload,
  };
};
