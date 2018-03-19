import { createStore, combineReducers } from 'redux';

import hola from './reducer';

const rootReducer = combineReducers({
  hola,
});

const store = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// console.log(hola)
export default store;