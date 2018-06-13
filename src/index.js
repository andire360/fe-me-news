import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as ducks from './ducks';
import { combineReducers } from 'redux';
import { logger , reduxFetch } from './utils';


const rootReducer = combineReducers({
    ...ducks.ui.reducer, // { ui: ui.rawReducer }
    ...ducks.data.reducer, // { example: example.rawReducer }
}); // combineReducers({ ui: ui.rawReducer, example: example.rawReducer })
  
/*
const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  */

// Stolen from https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(
      thunk, 
      //logger,
    reduxFetch,)
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

registerServiceWorker();