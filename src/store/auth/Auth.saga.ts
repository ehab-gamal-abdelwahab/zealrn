import {all, take, put, call} from 'redux-saga/effects';
import {AUTH_START, authSuccess, authFail} from './Auth.actions';
import {loginUser, registerUser} from '../../network/api';
import {UserData} from '../../types/auth.type';

function* authenticate({email, password, name}: UserData) {
  try {
    let data;
    if (name != '') {
      data = yield call(registerUser, {email, password, name});
    } else {
      data = yield call(loginUser, {email, password, name});
    }
    yield put(authSuccess(data));
  } catch (error: any) {
    yield put(authFail(error.message));
  }
}

function* authFlow() {
  while (true) {
    const {payload} = yield take(AUTH_START);
    const data = yield call(authenticate, payload);
  }
}

export default function* () {
  yield all([authFlow()]);
}
