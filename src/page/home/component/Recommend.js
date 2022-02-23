import React from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

const Recommend = (props) => {
  const { list } = props
  return (
    <RecommendWrapper>
      {
        list?.map((item) => {
          return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          )
        })
      }
    </RecommendWrapper>
  )
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState)(Recommend)