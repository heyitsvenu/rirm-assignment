import React from 'react';
import MailHeader from './MailHeader';
import Inbox from './Inbox';
import '../css/MailBody.css';

function MailBody({
  data,
  handleChange,
  handleDelete,
  handleLogoutClick,
  setTo,
  setSubject,
  setBody,
  openSentBox,
  sentMails,
  handleComposeMailSubmit,
  handleOpenSentMail,
  handleOpenInbox,
}) {
  return (
    <div className='mail-body'>
      <MailHeader data={data} handleLogoutClick={handleLogoutClick} />
      <hr />
      <Inbox
        data={data}
        handleChange={handleChange}
        handleDelete={handleDelete}
        setTo={setTo}
        setSubject={setSubject}
        setBody={setBody}
        openSentBox={openSentBox}
        sentMails={sentMails}
        handleComposeMailSubmit={handleComposeMailSubmit}
        handleOpenSentMail={handleOpenSentMail}
        handleOpenInbox={handleOpenInbox}
      />
    </div>
  );
}

export default MailBody;
