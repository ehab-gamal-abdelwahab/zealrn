import {
  USERS_FAIL,
  USERS_SUCCESS,
  LOCATIONS_FAIL,
  LOCATIONS_SUCCESS,
  HOME_START,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  SELECTED_USER,
} from './Home.actions';
import {User, Users} from '../../types/users.type';
import {Locations} from '../../types/locations.type';

type HomeState = {
  users: Users | [];
  locations: Locations | [];
  selectedUser: User;
  isLoading: boolean | false;
  error: any;
};

const initState: HomeState = {
  users: [],
  locations: [],
  selectedUser: {
    id: '',
    name: '',
    email: '',
    adminId: '',
  },
  isLoading: false,
  error: {},
};

const homeReducer = (state = initState, {type, payload}: any) => {
  switch (type) {
    case DELETE_USER:
    case HOME_START:
      return {
        ...state,
        isLoading: true,
      };
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: payload,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        users: [],
        error: payload,
      };
    case LOCATIONS_SUCCESS:
      debugger;
      return {
        ...state,
        isLoading: false,
        locations: payload,
      };
    case LOCATIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        locations: [],
        error: payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.filter(u => u.id != payload),
        locations: state.locations.filter(l => l.userId != payload),
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
