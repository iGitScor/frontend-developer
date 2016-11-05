/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { should } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import cartReducer from '../../client/reducers/cart-reducer';
import { makePayment } from '../../client/actions/cart-actions';

should();
let store;

describe('App State', () => {
  describe('Cart', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        cart: cartReducer,
      }));
    });
    describe('makePayment', () => {
      it('should make isPaid go from false to true', () => {
        store.getState().getIn(['cart', 'isPaid']).should.be.false;
        store.dispatch(makePayment());
        store.getState().getIn(['cart', 'isPaid']).should.be.true;
      });
    });
  });
});
