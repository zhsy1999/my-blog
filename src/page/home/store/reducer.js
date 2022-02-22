import { fromJS } from 'immutable'
//js对象转化为immutable对象
//禁止reducer中对state进行修改 只是返回一个全新的变量
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.qq22.com.cn%2Fimg%2F3902970703%2F3457759336.jpg&refer=http%3A%2F%2Fup.qq22.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648138292&t=b757a40898eecd9a69ee7f5e74640ddd'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}