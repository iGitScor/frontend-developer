import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.getIn(['cart', 'isPaid']) ? 'The cart is paid' : 'The cart is not paid',
  status: state.getIn(['cart', 'isPaid']) ? 'success' : 'pending',
});

export default connect(mapStateToProps)(Message);
