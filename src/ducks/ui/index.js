import PropTypes from 'prop-types';

export const ns = 'ui-duck';

export const shape = {
    itemsToShow: PropTypes.number.isRequired,
    isDarkTheme: PropTypes.bool.isRequired,
};

export const defaultState = {
    itemsToShow: 10,
    isDarkTheme: false,
  };

const root = state[ns];

export const selectors = {
    root,
    itemsToShow: state => root(state).itemsToShow,
    isDarkTheme: state => root(state).isDarkTheme,
} 

export const types = {
    updateItemsToShow: `${ns} / UPDATE_ITEMS_TO_SHOW`,
    toggleTheme: `${ns} / TOGGLE_THEME`,
};

export const actions = {
    updateItemsToShow,
    toggleTheme,
};

export const rawReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.updateItemsToShow:
            return { ...state, itemsToShow: action.payload };
        case types.toggleTheme:
            return { ...state, isDarkTheme: action.payload };
      default:
        return state;
    }
}
  
export reducer = {
    [ns]: rawReducer,
}

export default {
    ns,
    shape,
    defaultState,
    selectors,
    types,
    actions,
    rawReducer,
    reducer,
  }