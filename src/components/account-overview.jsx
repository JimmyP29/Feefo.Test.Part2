import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import ContactDetails from './header/contact-details';
import SalesDetails from './body/sales-details';
import UploadDetails from './body/upload-details';
import LinesDetails from './body/lines-details';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <FontAwesomeIcon icon={faHardHat} />
      Build your components here
      <ContactDetails />
      <SalesDetails />
      <UploadDetails />
      <LinesDetails />
    </div>
  )
}

export default AccountOverview;