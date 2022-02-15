import style from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = style.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

//内联转块状
export const Logo = style.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: inline-block;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`;

export const Nav = style.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;

  paddingRight: 70px;
  boxSizing: border-box;
`;

export const NavItem = style.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const NavSearch = style.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-left: 20px;
  box-sizing: border-box;
  margin-top: 9px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = style.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = style.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
  .iconfont {
    margin-left: -7px;
  }
`;

// 驼峰法无效  需要中间加横杠的写法
export const SearchRapper = style.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;

    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;