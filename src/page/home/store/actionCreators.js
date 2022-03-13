import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable'


const changeHomeData = (result) => (
  {
    type: constants.CHANGE_HOME_DATA,
    topiclist: result.topiclist,
    articleList: result.articleList,
    recommendList: result.recommendList,
  }
)
const addHomeList = (list) => (
  {
    type: constants.ADD_HOME_LIST,
    list,
  }
)

export const changeScrollShow = (show) => (
  {
    type: constants.CHANGE_SCROLL_SHOW,
    show,
  }
)

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data
      dispatch(changeHomeData(result));
    })
  }
}
export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res)=>{
      const result = res.data.data
      dispatch(addHomeList(result));
    })
  }
}