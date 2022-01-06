import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InboxNavLabel(props) {
  return (
    <button>
      <FontAwesomeIcon icon={['fas', 'tag']} /> {props.children}
    </button>
  );
}

export default InboxNavLabel;
