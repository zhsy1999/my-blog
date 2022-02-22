import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../page/home/store';
// import homeReducer from '../page/home/store/reducer';
//store下默认index文件作导出

// import headerReducer from '../common/header/store/reducer.js';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
}) 