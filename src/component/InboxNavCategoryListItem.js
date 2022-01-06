import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InboxNavCategoryListItem({ color, categoryName }) {
  return (
    <div className='category-list-item'>
      <span style={{ color }}>
        <FontAwesomeIcon icon={['fas', 'circle']} />
      </span>
      &nbsp;&nbsp;&nbsp; {categoryName}
    </div>
  );
}

export default InboxNavCategoryListItem;
