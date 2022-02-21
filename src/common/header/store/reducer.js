import * as constants from './constants';
import { fromJS } from 'immutable'
//js对象转化为immutable对象
//禁止reducer中对state进行修改 只是返回一个全新的变量
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // 效果相同 merge性能更高
      // return state.set('list', action.data).set('totalPage', action.totalPage)
    case constants.HANDLE_ENTER:
      return state.set('mouseIn', true)
    case constants.HANDLE_OUT:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state;
  }
  // if (action.type === constants.SEARCH_FOCUS){
  //   return state.set('focused', true)
  //   //set方法 会结合之前immutable对象的值和设置的值 返回一个全新的对象 并未改变原有state内容
  //   // {
  //   //   focused: true
  //   // }
  // }
  // if (action.type === constants.SEARCH_BLUR){
  //   return state.set('focused', false)
  //   // return 
  //   // {
  //   //   focused: false
  //   // }
  // }
  // if (action.type === constants.CHANGE_LIST){
  //   return state.set('list', action.data)
  // }
  // return state;
}