import {all} from 'redux-saga/effects';
import authSaga from './auth/Auth.saga';
import homeSaga from './home/Home.saga';
import detailsSaga from './details/Details.saga';

export default function* rootSaga() {
  yield all([authSaga(), homeSaga(), detailsSaga()]);
}
