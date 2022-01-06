import React from 'react';
import InboxNavFolderListItem from './InboxNavFolderListItem';
import InboxNavCategoryListItem from './InboxNavCategoryListItem';
import InboxNavLabel from './InboxNavLabel';

function InboxNav({
  data,
  openComposeMail,
  handleOpenInbox,
  handleOpenSentMail,
  sentMails,
}) {
  return (
    <div className='inbox-nav'>
      {/* Compose Button */}
      <div className='compose-btn'>
        <button onClick={openComposeMail}>Compose Mail</button>
      </div>

      {/* Folders */}
      <div className='folder'>
        <div className='folder-heading'>
          <p>Folders</p>
        </div>
        <div className='folder-list'>
          <InboxNavFolderListItem
            data={data}
            handleClick={() => handleOpenInbox()}
            bgClass='primary'
            folderName='Inbox'
            icon={['fas', 'inbox']}
          />
          <InboxNavFolderListItem
            data={sentMails}
            handleClick={() => handleOpenSentMail()}
            bgClass='secondary'
            folderName='Sent Mails'
            icon={['far', 'envelope']}
          />
          <InboxNavFolderListItem
            folderName='Important'
            icon={['fas', 'star']}
          />
          <InboxNavFolderListItem
            data='2'
            bgClass='important'
            folderName='Drafts'
            icon={['far', 'file-alt']}
          />
          <InboxNavFolderListItem
            folderName='Trash'
            icon={['far', 'trash-alt']}
          />
        </div>
      </div>

      {/* Categories */}
      <div className='category'>
        <div className='category-heading'>
          <p>Categories</p>
        </div>
        <div className='category-list'>
          <InboxNavCategoryListItem color='#00b494' categoryName='Work' />
          <InboxNavCategoryListItem color='#f2524d' categoryName='Documents' />
          <InboxNavCategoryListItem color='#0f83c9' categoryName='Social' />
          <InboxNavCategoryListItem
            color='#07c6c9'
            categoryName='Advertising'
          />
          <InboxNavCategoryListItem color='#faad50' categoryName='Clients' />
        </div>
      </div>

      {/* Labels */}
      <div className='label'>
        <div className='label-heading'>
          <p>Labels</p>
        </div>
        <div className='label-list'>
          <InboxNavLabel>Family</InboxNavLabel>
          <InboxNavLabel>Work</InboxNavLabel>
          <InboxNavLabel>Home</InboxNavLabel>
          <InboxNavLabel>Children</InboxNavLabel>
          <InboxNavLabel>Holidays</InboxNavLabel>
          <InboxNavLabel>Music</InboxNavLabel>
          <InboxNavLabel>Photography</InboxNavLabel>
          <InboxNavLabel>Film</InboxNavLabel>
        </div>
      </div>
    </div>
  );
}

export default InboxNav;
