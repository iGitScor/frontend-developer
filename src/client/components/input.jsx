// import React, { Component, PropTypes } from 'react';
//
// class TextInput extends Component {
//
//   static handleSubmit() {}
//
//   static handleBlur() {}
//
//   constructor(props) {
//     super(props);
//
//     // Bind action which needs Component instance access
//     this.handleChange = this.handleChange.bind(this);
//
//     this.state = {
//       text: this.props.text || '',
//     };
//   }
//
//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }
//
//   render() {
//     return (
//       <input
//         type="text"
//         value={this.state.text}
//         onChange={this.handleChange}
//       />
//     );
//   }
//
// }
//
// TextInput.propTypes = {
//   text: PropTypes.string,
// };
//
// export default TextInput;

import React, { PropTypes } from 'react';

const TextInput = ({ action, text }) =>
  <input type="text" value={text} onChange={action} />;

TextInput.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default TextInput;
