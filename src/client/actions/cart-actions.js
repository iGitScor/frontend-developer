import { createAction } from 'redux-actions';

export const MAKE_PAYMENT = 'MAKE_PAYMENT';
export const makePayment = createAction(MAKE_PAYMENT, () => true);
