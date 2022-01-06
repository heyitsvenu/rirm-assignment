import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InboxNavFolderListItem({
  data,
  handleClick,
  bgClass,
  folderName,
  icon,
}) {
  return (
    <div className='folder-list-item' onClick={handleClick}>
      <div className='folder-list-item-name'>
        <p>
          <FontAwesomeIcon icon={icon} />
          &nbsp;&nbsp;&nbsp; {folderName}
        </p>
      </div>
      <div className={`folder-list-item-count ${!bgClass ? '' : bgClass}`}>
        {!data ? null : Array.isArray(data) ? data.length : data}
      </div>
    </div>
  );
}

export default InboxNavFolderListItem;
