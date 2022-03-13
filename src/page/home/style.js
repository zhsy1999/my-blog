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
  width: 280px;
  float: right;
`

//涉及浮动 需要父元素触发bfc
//涉及子元素全体的margin样式 可以给父元素一个相反的来消除第一个的影响
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
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



//object-fit: cover; 图片裁剪 不拉伸
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-img {
    width: 115px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
}
`


//line-height: 27px;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 0px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  };
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0;  
`


//${(props) => props.imgUrl}   style-component语法
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  cursor: pointer;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
  border-radius: 4px;
`

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 30px 0;
  border-radius: 20px;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 14px
`