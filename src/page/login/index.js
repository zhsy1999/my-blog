import React, { useEffect } from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Navigate } from 'react-router-dom'

const Login = (props) => {
  const { login, loginStatus } = props
  let account,password

  if(!loginStatus){
    return (
      <LoginWrapper>
        <LoginBox>
          {/* innerRef */}
          <Input placeholder='账号' ref={(input) => {account = input}}></Input>
          <Input placeholder='密码' type='password' ref={(input) => {password = input}}></Input>
          <Button onClick={() => login(account, password)}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }else{
    return <Navigate to='/'></Navigate>
  }


}// mapState 和 mapDispatch变量名不能起重复
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(account, password){
    // console.log(account.value, password.value)
    dispatch(actionCreators.login(account.value, password.value))
  }
})

export default connect(mapState, mapDispatch)(Login)