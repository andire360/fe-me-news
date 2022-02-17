

const ns = "itemsIds";

const shape = {};

const defaultState = {
  ids: [],
  isLoading: false,
  error: null
};

const root = state => state[ns];

const selectors = {
  root,
  ids: state => root(state).ids,
  isLoading: state => root(state).isLoading,
  error: state => root(state).error
};

const types = {
  fetchItemsIds: "REQUEST_ITEMS_IDS",
};

const fetchItemsIds = () => ({
  type: types.fetchItemsIds,
  fetch: { url: `/v0/topstories.json` },
  params: {}
})

const actions = {
  fetchItemsIds
};

const stringifyErr = err => err.toString();

const rawReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${types.fetchItemsIds} / start`:
      return { ...state, isLoading: true };
    case `${types.fetchItemsIds} / success`:
      return { ids: action.payload, isLoading: false, error: null };
    case `${types.fetchItemsIds} / fail`:
      return {
        ids: {},
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  shape,
  defaultState,
  selectors,
  types,
  actions,
  rawReducer,
  reducer
};