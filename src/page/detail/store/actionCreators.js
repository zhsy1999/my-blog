import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable'

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content,
})

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res)=>{
      // axios.get('/api/detail.json?id=' + id).then((res)=>{
      const result = res.data.data
      dispatch(changeDetail(result.title, result.content));
    })
  }
}