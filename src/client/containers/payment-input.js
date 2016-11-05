import { connect } from 'react-redux';
import TextInput from '../components/input';
import { changePaymentValues } from '../actions/payment-actions';

const mapDispatchToProps = dispatch => ({
  action: (e) => { dispatch(changePaymentValues(e.target.value)); },

  actionLabel: 'Payment action',
});

export default connect(null, mapDispatchToProps)(TextInput);
