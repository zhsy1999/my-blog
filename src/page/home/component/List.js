import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'

const List = (props) => {
  const { list } = props
  return (
    <div>
      {list?.map((item) => {
        return (
          <ListItem key={item.get('id')}>
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
            <img className="list-img" src={item.get('imgUrl')}></img>
          </ListItem>
        )
      })}
    </div>
  )
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
})
export default connect(mapState)(List)
