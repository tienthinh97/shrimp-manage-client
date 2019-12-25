import { combineReducers } from 'redux';
import header from './reducer/headerReducer';
import login from './reducer/loginReducer';
import sensor from './reducer/sensorReducer';

var reducer = combineReducers({ header, login, sensor})

export default reducer;