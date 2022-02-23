import React from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

const Topic = (props) => {
  const { list } = props
  return (
    <TopicWrapper>
      {
        list?.map((item)=>{
          return (
            <TopicItem key={item.get('id')}>
              <img className='topic-pic' src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          )
        })
      }

      {/* <div>更多热门专题</div> */}
    </TopicWrapper>
  )
}

//不是箭头函数有括号不是箭头函数有括号不是箭头函数有括号不是箭头函数有括号不是箭头函数有括号不是箭头函数有括号
// const mapState = (state) => {
//   return
//   {
//     list: state.get('home').get('topicList')
//   }
// }
const mapState = (state) => ({
  list: state.get('home').get('topicList')
})

export default connect(mapState, null)(Topic)