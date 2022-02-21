import React from 'react'
//只要有jsx语法，正常编译就离不开react中的React
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchRapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
//组件名必须要大写

import { CSSTransition } from 'react-transition-group'

import  { actionCreators } from './store'
// import  * as actionCreators from './store/actionCreators'

const spinRef = React.createRef()


const Header = (props) => {
  // export default function Header() {
  // const [focused, setFocused] = useState(false)
  const { focused, handleInputFocus, handleInputBlur, list, page, totalPage,handleEnter, handleOut, mouseIn, handleChangePage  } = props
  // //搜索框聚焦
  // const handleInputFocus = () => {
  //   setFocused(true)
  // }
  // //搜索框失焦
  // const handleInputBlur = () => {
  //   setFocused(false)
  // }

  const getListArea = (show) => {
    const newList = list.toJS();
    const pageList = []


    //初始化没有值 key会都是undifined 重复报warning
    if(newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>  
        )
      }
    }

    if(show || mouseIn) {
      return (
        //onmouseleave和onmouseout
        <SearchInfo onMouseEnter={handleEnter} onMouseLeave={handleOut}>
          <SearchInfoTitle>
            热门搜素
            <SearchInfoSwitch onClick={()=> handleChangePage(page, totalPage, spinRef)}>
              <i ref={spinRef} className="iconfont spin">&#xe601;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
          {pageList}
            {/* { 
              list.map((item)=>{
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            } */}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
        return null
      }
    }
  return (
    <HeaderWrapper>
      <Logo href='/'/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <SearchRapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch className={focused ? 'focused' : ''} onFocus={()=>{handleInputFocus(list)}} onBlur={handleInputBlur}></NavSearch>
          </CSSTransition>
          <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6e4;</span>
          {getListArea(focused)}
        </SearchRapper>
        <NavItem className='right'>登陆</NavItem>
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
      </Nav>
      <Addition>
        <Button className='reg'>注册</Button>
        <Button className='writting'>
          <span className="iconfont">&#xe600;</span>
          写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    // focused: state.get('header').get('focused')
    // focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
    (list.size === 0) && dispatch(actionCreators.getList())
      // const action = {
      //   type: 'search_focus'
      // }
      // dispatch(action)
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleEnter() {
      dispatch(actionCreators.handleEnter())
    },
    handleOut() {
      dispatch(actionCreators.handleOut())
    },
    handleChangePage(page, totalPage, spinRef) {
      // 不在style里写 用的不是传统的css ref会获取不到  0-9转化为空字符串
      let originAngle = spinRef.current.style.transform.replace(/[^0-9]/ig, '')
      // 不为空转化为相应数字 为空转化为0
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else{
        originAngle = 0
      }
      // console.log(spinRef.current, originAngle)
      spinRef.current.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      // spinRef.current.style.transform = 'rotate(360deg)'
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}

export default connect (mapStateToProps, mapDispathToProps)(Header)
