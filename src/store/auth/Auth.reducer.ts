import {Auth} from '../../types/auth.type';
import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL} from './Auth.actions';

type UserState = {
  user: Auth;
  isloading: Boolean;
  error: any;
};

const initState: UserState = {
  user: {
    token: '',
    admin: {
      email: '',
      name: '',
    },
  },
  isloading: false,
  error: {},
};

const authReducer = (state = initState, {type, payload}: any) => {
  switch (type) {
    case AUTH_START:
      return {
        ...state,
        isloading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isloading: false,
        user: payload,
      };
    case AUTH_FAIL:
      return {
        ...state,
        isloading: false,
        user: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
