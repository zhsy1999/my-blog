import { fromJS } from 'immutable'
import * as constants from './constants';

//js对象转化为immutable对象
//禁止reducer中对state进行修改 只是返回一个全新的变量
const defaultState = fromJS({
  topicList: [],

  articleList: [],

  recommendList: [],

  showScroll: false,
});

//操作较为复杂时拆分出来
const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  });
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_HOME_LIST:
      //在这一层用fromjs的缺点 如果重复使用了action.list要多次fromJS
      return state.set('articleList', state.get('articleList').concat(fromJS(action.list)));
      //在actionCreators用fromjs则避免重复使用

    case constants.CHANGE_SCROLL_SHOW:
      //不是数组 不需要fromjs?
      // console.log(action.show, 'test')
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}