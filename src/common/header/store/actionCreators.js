import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable'

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
}
)
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const handleEnter = () => ({
  type: constants.HANDLE_ENTER
});
export const handleOut = () => ({
  type: constants.HANDLE_OUT
});
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});

// 没有中间件redux-thunk则只能返回对象
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      dispatch(changeList(res.data.data))
    }).catch(()=>{
      alert('error')
    })
  }
}