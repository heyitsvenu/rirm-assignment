import React, { useState } from 'react';
import InboxNav from './InboxNav';
import Mails from './Mails';

function Inbox({
  data,
  handleChange,
  handleDelete,
  setTo,
  setSubject,
  setBody,
  openSentBox,
  sentMails,
  handleComposeMailSubmit,
  handleOpenSentMail,
  handleOpenInbox,
}) {
  const [composeMail, setComposeMail] = useState(false);

  const openComposeMail = () => {
    setComposeMail(true);
  };

  return (
    <div className='inbox'>
      <InboxNav
        data={data}
        sentMails={sentMails}
        openComposeMail={openComposeMail}
        handleOpenSentMail={handleOpenSentMail}
        handleOpenInbox={handleOpenInbox}
      />
      <Mails
        data={data}
        handleChange={handleChange}
        handleDelete={handleDelete}
        composeMail={composeMail}
        setComposeMail={setComposeMail}
        setTo={setTo}
        setSubject={setSubject}
        setBody={setBody}
        openSentBox={openSentBox}
        sentMails={sentMails}
        handleComposeMailSubmit={handleComposeMailSubmit}
      />
    </div>
  );
}

export default Inbox;
