// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Message =
  ({ message, status }: { message: string, status: string }) =>
    <div
      className={
        classNames(
          {
            message: true,
            'message-pending': status === 'pending',
            'message-success': status === 'success',
          }
        )
      }
    >{message}</div>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Message;
