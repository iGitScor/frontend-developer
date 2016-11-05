/* eslint-disable import/no-extraneous-dependencies, no-console */

import chai from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import { describe, it } from 'mocha';
import Cart from '../../shared/cart';

chai.should();
chai.use(sinonChai);

describe('Shared', () => {
  describe('Cart', () => {
    describe('paymentInConsole', () => {
      it('should print a payment string with its price', () => {
        stub(console, 'log');
        new Cart(12).paymentInConsole();
        console.log.should.have.been.calledWith("You've paid 12€");
        console.log.restore();
      });
    });
  });
});
