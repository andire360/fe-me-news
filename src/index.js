import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { dataReducer } from './reducers';
import * as ducks from './ducks';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    ...ducks.ui.reducer, // { ui: ui.rawReducer }
    ...ducks.data.reducer, // { example: example.rawReducer }
}); // combineReducers({ ui: ui.rawReducer, example: example.rawReducer })
  

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

registerServiceWorker();