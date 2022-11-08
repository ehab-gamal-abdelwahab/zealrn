import {all, take, put, call} from 'redux-saga/effects';
import {
  HOME_START,
  usersSuccess,
  usersFail,
  locationsFail,
  locationsSuccess,
  deleteUserSuccess,
  DELETE_USER,
} from './Home.actions';
import {getUsers, getLocations, deleteUser} from '../../network/api';

function* homeUsers(token: string) {
  let data;
  try {
    data = yield call(getUsers, token);
    debugger;
    yield put(usersSuccess(data.users));
  } catch (error: any) {
    yield put(usersFail(error.message));
  }
}

function* homeLocations(token: string) {
  let data;
  try {
    data = yield call(getLocations, token);
    debugger;
    yield put(locationsSuccess(data.locations));
  } catch (error: any) {
    yield put(locationsFail(error.message));
  }
}

function* deleteUserSaga({id, token, email}: any) {
  let data;
  try {
    data = yield call(deleteUser, {token, email});
    debugger;
    yield put(deleteUserSuccess(id));
  } catch (error: any) {
    yield put(locationsFail(error.message));
  }
}

function* homeFlow() {
  while (true) {
    const {payload} = yield take(HOME_START);
    yield call(homeUsers, payload);
    yield call(homeLocations, payload);
  }
}

function* deleteFlow() {
  while (true) {
    const {payload} = yield take(DELETE_USER);
    yield call(deleteUserSaga, payload);
  }
}

export default function* () {
  yield all([homeFlow(), deleteFlow()]);
}
