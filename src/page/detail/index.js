import React, { useEffect } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
// import { withRouter } from 'react-router-dom'

const Detail = (props) => {
  const { title, content, getDetail } = props
  useEffect(()=>{
    //为啥为空
    // console.log(props, props.match.params.id, props.location.search)
    getDetail()
  }, [])

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{__html: content}} />
    </DetailWrapper>
  )
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail)