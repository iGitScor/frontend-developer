import { createAction } from 'redux-actions';

export const CHANGE_PAYMENT_VALUES = 'CHANGE_PAYMENT_VALUES';
export const changePaymentValues = createAction(CHANGE_PAYMENT_VALUES, () => true);
