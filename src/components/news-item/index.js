import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';


export class NewsItem extends Component {

  componentDidMount() { 
    this.props.fetchItem(this.props.id)  
  }

  render() {
    const item = this.props.item;
    if (!item || Object.keys(item).length === 0) {
      return <div>Loading…</div>
    }
    return (
      <div>
        <a href={item.url}>
          {item.title}
        </a>
        <br />
        <Link to={`/item/${item.id}`}>
          {item.score} points 
        </Link>
        by {item.by} at {item.time} |
        <Link to={`/item/${item.id}`}>
        { item.descendants === 0
          ? 'discuss'
          : item.descendants + ' comments'
        }
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => { 
  return {
    item: (state.data.items[ownProps.id] || {}).item
  }
}

export const mapDispatchToProps = {
  fetchItem: actions.fetchItem,
}

export default connect(mapStateToProps, mapDispatchToProps) (NewsItem);


