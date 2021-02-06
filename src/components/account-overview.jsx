import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
//import styled from 'styled-components';

import ContactDetails from './header/contact-details';
import SalesOverview from './body/sales-overview';


import './account-overview.css';

export const AccountOverview = ({ data }) => {
  console.log(data);
  const { supportContact: {
    name,
    email
  } } = data;
  return (
    <div className="AccountOverview">
      <FontAwesomeIcon icon={faHardHat} />
      Build your components here
      <ContactDetails
        name={name}
        email={email}
      />
      <SalesOverview />
    </div>
  )
}

export default AccountOverview;