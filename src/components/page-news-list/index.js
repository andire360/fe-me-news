import React, { Component } from 'react';
import { NewsItemList} from '../';
import { connect } from 'react-redux';
import * as ducks from '../../ducks';

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


export const mapDispatchToProps = {
  fetchItemsIds: ducks.data.itemsIds.actions.fetchItemsIds,
  updateItemsToShow: ducks.ui.actions.updateItemsToShow
}

export const mapStateToProps = state => {
  return {
    ids: firstN(
      ducks.ui.selectors.itemsToShow(state),
      ducks.data.itemsIds.selectors.ids(state),
    ) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);