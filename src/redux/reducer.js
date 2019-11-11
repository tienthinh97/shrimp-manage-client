import { combineReducers } from 'redux';
import header from './reducer/headerReducer';
import login from './reducer/loginReducer';

var reducer = combineReducers({ header, login})

export default reducer;