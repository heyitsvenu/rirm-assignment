import React from 'react';
import AdminNav from './component/AdminNav';
import MailBody from './component/MailBody';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGem,
  faChartBar,
  faEdit,
  faCopy,
  faEnvelope as farEnvelope,
  faFileAlt,
  faTrashAlt,
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
} from '@fortawesome/free-solid-svg-icons';
import './css/App.css';

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
  faTag
);

function App() {
  return (
    <>
      <AdminNav />
      <MailBody />
    </>
  );
}

export default App;
