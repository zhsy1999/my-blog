import { fromJS } from 'immutable'
//js对象转化为immutable对象
//禁止reducer中对state进行修改 只是返回一个全新的变量
const defaultState = fromJS({
  topicList: [],

  articleList: [],

  recommendList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
      // state.set('topicList', fromJS(action.topicList))
    default:
      return state;
  }
}