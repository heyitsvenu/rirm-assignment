import React, { useState, useEffect } from 'react';
import Login from './component/Login';
import AdminNav from './component/AdminNav';
import MailBody from './component/MailBody';
import { format } from 'date-fns';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGem,
  faChartBar,
  faEdit,
  faCopy,
  faEnvelope as farEnvelope,
  faFileAlt,
  faTrashAlt,
  faEye,
} from '@fortawesome/free-regular-svg-icons';
import {
  faThLarge,
  faEnvelope,
  faChartPie,
  faFlask,
  faDesktop,
  faGlobeAmericas,
  faBars,
  faBell,
  faSignOutAlt,
  faInbox,
  faStar,
  faCircle,
  faTag,
  faSync,
  faExclamation,
  faArrowRight,
  faArrowLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './css/App.css';
import { set } from 'date-fns/esm';

library.add(
  faThLarge,
  faGem,
  faChartBar,
  faEnvelope,
  faChartPie,
  faFlask,
  faEdit,
  faDesktop,
  faCopy,
  faGlobeAmericas,
  faBars,
  faBell,
  faSignOutAlt,
  faInbox,
  farEnvelope,
  faStar,
  faFileAlt,
  faTrashAlt,
  faCircle,
  faTag,
  faSync,
  faEye,
  faExclamation,
  faArrowRight,
  faArrowLeft,
  faTimes
);

const mock_data = [
  {
    id: 1,
    name: 'Venu',
    email: 'venu123@gmail.com',
    pwd: '1234',
    mails: [
      {
        id: 1,
        from: 'Anna',
        subject: 'Lorem ipsum dolor sit amet consectetur',
        body: 'hello world',
        date: format(new Date(), 'dd-MM-yyyy'),
        selected: false,
      },
      {
        id: 2,
        from: 'Matt',
        subject: 'Lorem adipisicing elit. Quia, reiciendis',
        body: 'hello world',
        date: format(new Date(), 'dd-MM-yyyy'),
        selected: false,
      },
      {
        id: 3,
        from: 'Jeff',
        subject: 'Lorem Temporibus, nisi! ipsum dolor',
        body: 'hello world',
        date: format(new Date(), 'dd-MM-yyyy'),
        selected: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Hari',
    email: 'hari123@gmail.com',
    pwd: '1234',
    mails: [
      {
        id: 1,
        from: 'Dave',
        subject: 'Lorem ipsum dolor sit amet consectetur',
        body: 'hello world',
        date: format(new Date(), 'dd-MM-yyyy'),
        selected: false,
      },
      {
        id: 2,
        from: 'Matt',
        subject: 'Lorem adipisicing elit. Quia, reiciendis',
        body: 'hello world',
        date: format(new Date(), 'dd-MM-yyyy'),
        selected: false,
      },
      {
        id: 3,
        from: 'Randy',
        subject: 'Lorem Temporibus, nisi! ipsum dolor',
        body: 'hello world',
        date: format(new Date(), 'dd-MM-yyyy'),
        selected: false,
      },
      {
        id: 4,
        from: 'Will',
        subject: 'Lorem Temporibus, nisi! ipsum dolor',
        body: 'hello world',
        date: format(new Date(), 'dd-MM-yyyy'),
        selected: false,
      },
    ],
  },
];

function App() {
  const [initialMails, setMails] = useState(
    JSON.parse(localStorage.getItem('mails'))
  );
  const [sentMails, setSentMails] = useState(
    JSON.parse(localStorage.getItem('sent-mails'))
  );

  const [openSentBox, setOpenSentBox] = useState(false);

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn'))
  );
  const [submitError, setSubmitError] = useState(null);

  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoginSuccess);
    localStorage.setItem('mails', JSON.stringify(initialMails));
    localStorage.setItem('sent-mails', JSON.stringify(sentMails));
  }, [isLoginSuccess, initialMails, sentMails]);

  const handleChange = (id) => {
    setMails(
      initialMails.map((data) => {
        if (data.id === id) {
          return { ...data, selected: !data.selected };
        } else {
          return { ...data };
        }
      })
    );
  };

  const handleDelete = () => {
    console.log('hello');
    setMails(
      initialMails.filter((data) => {
        return data.selected === false;
      })
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mock_data.some((data) => data.email === email && data.pwd === pwd)) {
      setIsLoginSuccess(!isLoginSuccess);
      const { mails } = mock_data.find((data) => data.email === email);
      setMails(mails);
      setSentMails([]);
    } else {
      setSubmitError(() => {
        return (
          <div className='error-msg'>Email or Password does not match</div>
        );
      });
    }
  };

  const handleLogoutClick = () => {
    setIsLoginSuccess(!isLoginSuccess);
    setMails([]);
    setSentMails([]);
    setSubmitError(null);
  };

  const handleComposeMailSubmit = () => {
    console.log(to, subject, body);

    localStorage.setItem(
      'sent-mails',
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('sent-mails')),
        {
          id:
            JSON.parse(localStorage.getItem('sent-mails')).length !== 0
              ? JSON.parse(localStorage.getItem('sent-mails'))[
                  JSON.parse(localStorage.getItem('sent-mails')).length - 1
                ].id + 1
              : 1,
          to: to,
          subject: subject,
          body: body,
          date: format(new Date(), 'dd-MM-yyyy'),
          selected: false,
        },
      ])
    );
    setSentMails(JSON.parse(localStorage.getItem('sent-mails')));
  };

  const handleOpenSentMail = () => {
    setOpenSentBox(true);
  };

  const handleOpenInbox = () => {
    setOpenSentBox(false);
  };

  return (
    <>
      {!isLoginSuccess ? (
        <div className='login-modal'>
          <Login
            isLoginSuccess={isLoginSuccess}
            submitError={submitError}
            handleEmailChange={handleEmailChange}
            handlePwdChange={handlePwdChange}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <>
          <AdminNav />
          <MailBody
            data={initialMails}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleLogoutClick={handleLogoutClick}
            setTo={setTo}
            setSubject={setSubject}
            setBody={setBody}
            openSentBox={openSentBox}
            sentMails={sentMails}
            handleComposeMailSubmit={handleComposeMailSubmit}
            handleOpenSentMail={handleOpenSentMail}
            handleOpenInbox={handleOpenInbox}
          />
        </>
      )}
    </>
  );
}

export default App;
