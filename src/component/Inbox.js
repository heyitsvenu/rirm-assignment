import React from 'react';
import InboxNav from './InboxNav';
import Mails from './Mails';

function Inbox() {
  return (
    <div className='inbox'>
      <InboxNav />
      <Mails />
    </div>
  );
}

export default Inbox;
