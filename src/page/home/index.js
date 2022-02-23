import React, { useEffect } from 'react'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import axios from 'axios'
import { connect } from 'react-redux'

const Home = (props) => {
  const { changeHomeData } = props
  useEffect(()=>{
    axios.get('/api/home.json').then((res)=>{
      // console.log(res.data.data)
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topiclist: result.topiclist,
        articleList: result.articleList,
        recommendList: result.recommendList,
      }
      changeHomeData(action)
    })
  })
  return (
    <HomeWrapper>
      <HomeLeft>
        <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommend></Recommend>
        <Writer></Writer>
      </HomeRight>
    </HomeWrapper>
  )
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
})

export default connect(null, mapDispatch)(Home)