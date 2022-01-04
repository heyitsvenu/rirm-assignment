import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/AdminNav.css';

function AdminNav() {
  return (
    <div className='admin-nav'>
      <div className='logo'>
        <h1>IN+</h1>
      </div>
      <div className='nav-items'>
        <div>
          <FontAwesomeIcon icon={['fas', 'th-large']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['far', 'gem']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['far', 'chart-bar']} size='lg' />
        </div>
        <div className='current'>
          <FontAwesomeIcon icon={['fas', 'envelope']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['fas', 'chart-pie']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['fas', 'flask']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['far', 'edit']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['fas', 'desktop']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['far', 'copy']} size='lg' />
        </div>
        <div>
          <FontAwesomeIcon icon={['fas', 'globe-americas']} size='lg' />
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
