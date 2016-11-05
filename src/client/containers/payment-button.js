import { connect } from 'react-redux';
import Button from '../components/button';
import { makePayment } from '../actions/cart-actions';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(makePayment()); },

  actionLabel: 'Tip him ;)',
});

export default connect(null, mapDispatchToProps)(Button);
