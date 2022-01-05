import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MailHeader({ data, handleLogoutClick }) {
  return (
    <div className='mail-header'>
      <div className='bars'>
        <FontAwesomeIcon icon={['fas', 'bars']} size='lg' />
      </div>
      <div className='search-input'>
        <input type='text' placeholder='Search for something...' />
      </div>
      <div className='alert-icons'>
        <div className='unread-msgs'>
          <FontAwesomeIcon icon={['fas', 'envelope']} size='lg' />
          <span>{data.length}</span>
        </div>
        <div className='notification'>
          <FontAwesomeIcon icon={['fas', 'bell']} size='lg' />
          <span>4</span>
        </div>
      </div>
      <div className='logout-btn'>
        <button onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={['fas', 'sign-out-alt']} /> Log out
        </button>
      </div>
    </div>
  );
}

export default MailHeader;
