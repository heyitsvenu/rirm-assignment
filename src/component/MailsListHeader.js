import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MailsListHeader({ data, handleDelete }) {
  return (
    <div className='mail-list-header'>
      <div className='top'>
        <h2>
          Inbox <span>({data.length})</span>
        </h2>
        <div className='mail-list-search-input'>
          <input type='text' />
          <button>Search</button>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <button>
            <FontAwesomeIcon icon={['fas', 'sync']} /> Refresh
          </button>
          <button>
            <FontAwesomeIcon icon={['far', 'eye']} />
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'exclamation']} />
          </button>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={['far', 'trash-alt']} />
          </button>
        </div>
        <div className='right'>
          <button>
            <FontAwesomeIcon icon={['fas', 'arrow-left']} />
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailsListHeader;
