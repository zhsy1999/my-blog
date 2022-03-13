import style from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = style.div`
  z-index: 1;
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
  display: inline-block;
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
  .zoom {
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

export const SearchInfo = style.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`

export const SearchInfoTitle = style.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

// 该组件下带有spin标签的组件应用样式   只有block样式才能进行transform
// 给标签加 transition 让其具备过度特性 设置transform-origin让其围绕中心点旋转 每次点击改变transform中rotate的值 
export const SearchInfoSwitch = style.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`

// 设置块状目的是自定义宽高 块状之后特性占据一行 设置float: left让item不占据一行自由排布 但元素浮动了
export const SearchInfoItem = style.a`
  display:block;
  float: left;
  line-height: 20px;
  font-size: 12px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

// 自己设置元素浮动 宽高超出外层包裹元素 设置overflow后形成BFC 
export const SearchInfoList = style.div`
  overflow: hidden;
  margin-bottom: 10px;
`