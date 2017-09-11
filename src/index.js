import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import App from './Components/App';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

//react router imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.querySelector('#root'));
