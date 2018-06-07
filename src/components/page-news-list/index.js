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
    return !isArraysEqual(this.props.ids, nextProps.ids) || this.props.itemsToShow !== nextProps.itemsToShow;
  }

  render() {
    const { ids } = this.props;
    //const itemsToShow = this.props.itemsToShow;
    if (!ids ) {
      return <div>Loading…</div>
    }
    return (
      <div>
        <input type="number" min={1} max={100} value={this.props.itemsToShow} onChange= {e => this.props.updateItemsToShow(e.target.value)} />
        <NewsItemList ids={ids} />
        <button onClick={this.props.fetchItemsIds}>Refresh</button>
      </div>
    )
  }
}

const firstN = (n, arr) => arr.slice(0, n);
const itemsToShow = 5;;

export const mapDispatchToProps = {
  fetchItemsIds: actions.fetchItemsIds,
  updateItemsToShow: actions.updateItemsToShow
}

export const mapStateToProps = state => {
  return {
    ids: firstN(state.ui.itemsToShow, state.data.itemsIds.ids),
    itemsToShow: state.ui.itemsToShow,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);