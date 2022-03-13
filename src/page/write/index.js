import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Write = (props) => {
  const { loginStatus } = props

  if(loginStatus){
    return (
      <div>
        写文章页面
      </div>
    )
  }else{
    return <Navigate to='/login'></Navigate>
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Write)