import {Auth} from '../../types/auth.type';
import {Locations} from '../../types/locations.type';
import {
  DETAILS_START,
  USER_LOCATIONS_SUCCESS,
  USER_LOCATIONS_FAIL,
  DELETE_LOCATION,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_FAIL,
} from './Details.actions';

type UserDetailsState = {
  locations: Locations;
  isloading: Boolean;
  error: any;
};

const initState: UserDetailsState = {
  locations: [],
  isloading: false,
  error: {},
};

const detailsReducer = (state = initState, {type, payload}: any) => {
  switch (type) {
    case DELETE_LOCATION:
    case DETAILS_START:
      return {
        ...state,
        isloading: true,
      };
    case USER_LOCATIONS_SUCCESS:
      return {
        ...state,
        isloading: false,
        locations: payload,
      };
    case USER_LOCATIONS_FAIL:
      return {
        ...state,
        isloading: false,
        locations: [],
        error: payload,
      };
    case DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        isloading: false,
        locations: state.locations.filter(l => l.id != payload),
      };
    case DELETE_LOCATION_FAIL:
      return {
        ...state,
        isloading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
