import { fromJS } from 'immutable'
import * as constants from './constants';

//js对象转化为immutable对象
//禁止reducer中对state进行修改 只是返回一个全新的变量
const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
      })
    default:
      return state;
  }
}