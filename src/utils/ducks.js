export const mergeObjects = objects => Object.assign({}, ...objects);

const augmentSelector = (rootSelector, selector) => {
  return (state, ...restArgs) => selector(rootSelector(state), ...restArgs);
}

const augmentSelectorsReducerFactory = (rootSelector, ns, selectorsObj) => (state, item) => {
    return {
      ...state,
      [ns]: {
        ...state[ns],
        [selectorsObj[item]]: augmentSelector(rootSelector, selectorsObj[item])
      }
    }
  };

const augmentSelectorsReducerFactory = (rootSelector, ns, selectorsObj) => (state, item) => {
    return {
      ...state,
      [ns]: {
        ...state[ns],
        [item]: augmentSelector(rootSelector, selectorsObj[item])
      }
    }
  };