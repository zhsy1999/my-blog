import React from 'react'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'


export default function Home() {
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
