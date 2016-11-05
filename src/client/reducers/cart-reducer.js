import * as Immutable from 'immutable';
import { MAKE_PAYMENT } from '../actions/cart-actions';
import { CHANGE_PAYMENT_VALUES } from '../actions/payment-actions';

const initialState = Immutable.Map({
  isPaid: false,
  price: 0,
});

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_PAYMENT:
      return state.set('isPaid', action.payload);
    case CHANGE_PAYMENT_VALUES:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
