// @flow

class Cart {
  price: number;

  constructor(price: number) {
    this.price = price;
  }

  payment() {
    return `You've paid ${this.price}€`;
  }

  paymentInConsole() {
    /* eslint-disable no-console */
    console.log(this.payment());
    /* eslint-enable no-console */
  }

}

export default Cart;
