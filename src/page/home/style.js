import styled from 'styled-components'


//涉及浮动 需要父元素触发bfc
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`

//涉及浮动 需要父元素触发bfc
//涉及子元素全体的margin样式 可以给父元素一个相反的来消除第一个的影响
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`
//涉及浮动 需要父元素触发bfc img不行 需要块状
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 10px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`