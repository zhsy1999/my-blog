import React, { useEffect } from 'react'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import axios from 'axios'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style.js'

const Home = (props) => {
  const { changeHomeData, showScroll, changeScrollTopShow } = props
  useEffect(()=>{
    changeHomeData()
    bindEvents()
    // axios.get('/api/home.json').then((res)=>{
    //   // console.log(res.data.data)
    //   const result = res.data.data
    //   const action = {
    //     type: 'change_home_data',
    //     topiclist: result.topiclist,
    //     articleList: result.articleList,
    //     recommendList: result.recommendList,
    //   }
    //   changeHomeData(action)
    // })
  }, [])
  //涉及生命周期时 函数式组件更为精细 可考虑是否缺少了括号（否则不同state中变量改变会互相影响）


  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  const bindEvents = () => {
    window.addEventListener('scroll', changeScrollTopShow)
    // window.removeEventListener('scroll', changeScrollTopShow)
  }
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
      { showScroll ? <BackTop onClick={handleScrollTop}>回到顶部</BackTop> : null }
    </HomeWrapper>
  )
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    // console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 200){
      dispatch(actionCreators.changeScrollShow(true))
    }else {
      dispatch(actionCreators.changeScrollShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)