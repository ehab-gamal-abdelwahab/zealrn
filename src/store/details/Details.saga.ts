import {all, take, put, call} from 'redux-saga/effects';
import {
  DETAILS_START,
  DELETE_LOCATION,
  userLocationsSuccess,
  userLocationsFail,
  deleteLocationSuccess,
  deleteLocationFail,
} from './Details.actions';
import {userLocations, deleteLocation} from '../../network/api';

function* fetchUserLocations({email, token}: any) {
  try {
    let data;

    data = yield call(userLocations, {email, token});

    yield put(userLocationsSuccess(data.locations));
  } catch (error: any) {
    yield put(userLocationsFail(error.message));
  }
}

function* deleteLocationSaga({id, token}: any) {
  let data;
  debugger;
  try {
    data = yield call(deleteLocation, {token, id});
    debugger;
    yield put(deleteLocationSuccess(id));
  } catch (error: any) {
    yield put(deleteLocationFail(error.message));
  }
}

function* detailsFlow() {
  while (true) {
    const {payload} = yield take(DETAILS_START);
    yield call(fetchUserLocations, payload);
  }
}

function* deleteFlow() {
  while (true) {
    const {payload} = yield take(DELETE_LOCATION);
    yield call(deleteLocationSaga, payload);
  }
}

export default function* () {
  yield all([detailsFlow(), deleteFlow()]);
}
