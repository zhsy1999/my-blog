import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

const List = (props) => {
  const { list, getMoreList } = props
  return (
    <div>
      {list?.map((item) => {
        return (
          <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
          {/* <Link key={item.get('id')} to={'/detail?id=' + item.get('id')}> */}
          {/* link对应route格式也要同步<Route path='/detail/:id' exact element={<Detail />}></Route>*/}
            <ListItem key={item.get('id')}>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
              <img className="list-img" src={item.get('imgUrl')}></img>
            </ListItem>
          </Link>

        )
      })}
      <LoadMore onClick={getMoreList}>更多文字</LoadMore>
    </div>
  )
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
})

const mapDispatch = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList())
  }
})
export default connect(mapState, mapDispatch)(List)
