import {combineReducers} from 'redux';

import authReducer from './auth/Auth.reducer';
import homeReducer from './home/Home.reducer';
import detailsReducer from './details/Details.reducer';

const rootReducer = combineReducers({authReducer, homeReducer, detailsReducer});

export default rootReducer;
