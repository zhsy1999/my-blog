import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable'



const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})


//LOGOUT这个action不是由login下的文件dispatch 不过涉及该文件下的数据 操作集中到该store下处理
export const logout = () => ({
  type: constants.LOGOUT,
  value: false,
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
      // axios.get('/api/detail.json?id=' + id).then((res)=>{
      const result = res.data.data
      if(result) {
        dispatch(changeLogin())
      }else {
        alert('登录失败')
      }
      // dispatch(changeDetail(result.title, result.content));
    })
  }
}