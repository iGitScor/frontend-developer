import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import cartReducer from './reducers/cart-reducer';
import PaymentMessage from './containers/payment-message';
import PaymentButton from './containers/payment-button';

const store = createStore(combineReducers({
  cart: cartReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <PaymentButton />
      <PaymentMessage />
    </div>
  </Provider>,
  document.querySelector('.app')
);
