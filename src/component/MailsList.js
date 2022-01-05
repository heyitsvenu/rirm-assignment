import React from 'react';

function MailsList({ data, handleChange, openSentBox }) {
  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id} className='mail-list-item'>
            <input type='checkbox' onChange={() => handleChange(data.id)} />
            <p>{openSentBox ? data.to : data.from}</p>
            <p>{`${data.subject.slice(0, 25)}...`}</p>
            <p>{data.date}</p>
          </div>
        );
      })}
    </>
  );
}

export default MailsList;
