import React from 'react';
import MailHeader from './MailHeader';
import Inbox from './Inbox';
import '../css/MailBody.css';

function MailBody() {
  return (
    <div className='mail-body'>
      <MailHeader />
      <hr />
      <Inbox />
    </div>
  );
}

export default MailBody;
