import React from 'react'
//只要有jsx语法，正常编译就离不开react中的React
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchRapper } from './style'
//组件名必须要大写

import { CSSTransition } from 'react-transition-group'

import  { actionCreators } from './store'
// import  * as actionCreators from './store/actionCreators'


const Header = (props) => {
  // export default function Header() {
  // const [focused, setFocused] = useState(false)
  const { focused, handleInputFocus, handleInputBlur } = props
  // //搜索框聚焦
  // const handleInputFocus = () => {
  //   setFocused(true)
  // }
  // //搜索框失焦
  // const handleInputBlur = () => {
  //   setFocused(false)
  // }
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
            <NavSearch className={focused ? 'focused' : ''} onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
          </CSSTransition>
        <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</span>
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
    focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      // const action = {
      //   type: 'search_focus'
      // }
      // dispatch(action)
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect (mapStateToProps, mapDispathToProps)(Header)
