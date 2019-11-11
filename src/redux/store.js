import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
var store = createStore(reducer, applyMiddleware(...middlewares));

// store.subscribe(()=>console.log('State change',store.getState()));
export default store;