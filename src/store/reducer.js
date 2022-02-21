import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
// import headerReducer from '../common/header/store/reducer.js';

export default combineReducers({
  header: headerReducer
})