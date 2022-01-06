import React, { useState, useEffect } from 'react';
import MailsListHeader from './MailsListHeader';
import MailsList from './MailsList';
import ComposeMail from './ComposeMail';

function Mails({
  data,
  handleChange,
  handleDelete,
  composeMail,
  setComposeMail,
  setTo,
  setSubject,
  setBody,
  openSentBox,
  sentMails,
  handleComposeMailSubmit,
}) {
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsSent(false), 2000);
  }, [isSent]);

  return (
    <div className='mails'>
      <MailsListHeader data={data} handleDelete={handleDelete} />
      <div className='mail-list'>
        <MailsList
          data={openSentBox ? sentMails : data}
          handleChange={handleChange}
          openSentBox={openSentBox}
        />
        {isSent ? <div className='sent-toast'>Mail Sent</div> : null}
      </div>
      {composeMail && (
        <ComposeMail
          setComposeMail={setComposeMail}
          setTo={setTo}
          setSubject={setSubject}
          setBody={setBody}
          handleComposeMailSubmit={handleComposeMailSubmit}
          isSent={isSent}
          setIsSent={setIsSent}
        />
      )}
    </div>
  );
}

export default Mails;
