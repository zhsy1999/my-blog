import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//中间件 store 和 reducer之间 可以让action中存在异步的函数 如果没有这个action必须是对象 需要redux的applyMiddleware来引入中间件

//redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
// const store = createStore(reducer, composeEnhancers());

export default store;