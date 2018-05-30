import React, { Component } from 'react';
import { NewsItemList} from '../';
import { api } from '../../utils';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const isArraysEqual = (arr1=[], arr2=[]) => arr1.toString() === arr2.toString();

export class PageNewsList extends Component {
  
  componentDidMount() {
    this.props.fetchItemsIds();
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return !isArraysEqual(this.props.ids, nextProps.ids)
  }

  render() {
    const { ids } = this.props;
    if (!ids) {
      return <div>Loading…</div>
    }
    return (
      <div>
        <NewsItemList ids={ids} />
        <button onClick={this.props.fetchItemsIds}>Refresh</button>
      </div>
    )
  }
}
const firstN = (n, arr) => arr.slice(0, n)

export const mapDispatchToProps = {
  fetchItemsIds: actions.fetchItemsIds,
}

export const mapStateToProps = state => {
  return {
    ids: firstN(state.ui.itemsToShow, state.data.itemsIds.ids)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);