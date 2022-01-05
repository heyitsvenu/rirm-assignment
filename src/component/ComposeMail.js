import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ComposeMail({
  openComposeMail,
  setTo,
  setSubject,
  setBody,
  handleComposeMailSubmit,
  isSent,
  setIsSent,
}) {
  const toRef = useRef('');
  const subjectRef = useRef('');
  const bodyRef = useRef('');

  return (
    <div className='compose-mail'>
      <div className='compose-mail-header'>
        <div onClick={openComposeMail}>
          <FontAwesomeIcon icon={['fas', 'times']} size='lg' />
        </div>
      </div>
      <div className='compose-mail-body'>
        <div>
          <input
            type='email'
            placeholder='To'
            onChange={(e) => setTo(e.target.value)}
            ref={toRef}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Subject'
            onChange={(e) => setSubject(e.target.value)}
            ref={subjectRef}
          />
        </div>
        <div>
          <textarea
            placeholder='Body'
            onChange={(e) => setBody(e.target.value)}
            ref={bodyRef}
          ></textarea>
        </div>
        <div>
          <button
            onClick={() => {
              toRef.current.focus();
              toRef.current.value = '';
              subjectRef.current.value = '';
              bodyRef.current.value = '';
              setIsSent(!isSent);
              handleComposeMailSubmit();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComposeMail;
