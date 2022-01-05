import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InboxNav({
  data,
  openComposeMail,
  handleOpenInbox,
  handleOpenSentMail,
  sentMails,
}) {
  return (
    <div className='inbox-nav'>
      <div className='compose-btn'>
        <button onClick={openComposeMail}>Compose Mail</button>
      </div>
      <div className='folder'>
        <div className='folder-heading'>
          <p>Folders</p>
        </div>
        <div className='folder-list'>
          <div className='folder-list-item'>
            <div className='folder-list-item-name' onClick={handleOpenInbox}>
              <p>
                <FontAwesomeIcon icon={['fas', 'inbox']} />
                &nbsp;&nbsp;&nbsp; Inbox
              </p>
            </div>
            <div className='folder-list-item-count primary'>{data.length}</div>
          </div>
          <div className='folder-list-item'>
            <div className='folder-list-item-name' onClick={handleOpenSentMail}>
              <p>
                <FontAwesomeIcon icon={['far', 'envelope']} />
                &nbsp;&nbsp;&nbsp; Sent Mail
              </p>
            </div>
            <div className='folder-list-item-count secondary'>
              {sentMails.length}
            </div>
          </div>
          <div className='folder-list-item'>
            <div className='folder-list-item-name'>
              <p>
                <FontAwesomeIcon icon={['fas', 'star']} />
                &nbsp;&nbsp;&nbsp; Important
              </p>
            </div>
            <div className='folder-list-item-count'></div>
          </div>
          <div className='folder-list-item'>
            <div className='folder-list-item-name'>
              <p>
                <FontAwesomeIcon icon={['far', 'file-alt']} />
                &nbsp;&nbsp;&nbsp; Drafts
              </p>
            </div>
            <div className='folder-list-item-count important'>2</div>
          </div>
          <div className='folder-list-item'>
            <div className='folder-list-item-name'>
              <p>
                <FontAwesomeIcon icon={['far', 'trash-alt']} />
                &nbsp;&nbsp;&nbsp; Trash
              </p>
            </div>
            <div className='folder-list-item-count'></div>
          </div>
        </div>
      </div>
      <div className='category'>
        <div className='category-heading'>
          <p>Categories</p>
        </div>
        <div className='category-list'>
          <div className='category-list-item'>
            <span style={{ color: '#00b494' }}>
              <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
            &nbsp;&nbsp;&nbsp; Work
          </div>
          <div className='category-list-item'>
            <span style={{ color: '#f2524d' }}>
              <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
            &nbsp;&nbsp;&nbsp; Documents
          </div>
          <div className='category-list-item'>
            <span style={{ color: '#0f83c9' }}>
              <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
            &nbsp;&nbsp;&nbsp; Social
          </div>
          <div className='category-list-item'>
            <span style={{ color: '#07c6c9' }}>
              <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
            &nbsp;&nbsp;&nbsp; Advertising
          </div>
          <div className='category-list-item'>
            <span style={{ color: '#faad50' }}>
              <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
            &nbsp;&nbsp;&nbsp; Clients
          </div>
        </div>
      </div>
      <div className='label'>
        <div className='label-heading'>
          <p>Labels</p>
        </div>
        <div className='label-list'>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Family
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Work
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Home
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Children
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Holidays
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Music
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Photography
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'tag']} /> Film
          </button>
        </div>
      </div>
    </div>
  );
}

export default InboxNav;
