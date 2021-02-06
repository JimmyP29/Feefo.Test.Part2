import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
//import styled from 'styled-components';
import { string, number, shape } from 'prop-types';

import ContactDetails from './header/contact-details';
import SalesOverview from './body/sales-overview';


import './account-overview.css';

export const AccountOverview = ({ data }) => {
  console.log(data);
  const {
    supportContact: { name, email },
    salesOverview,
  } = data;
  return (
    <div className="AccountOverview">
      <FontAwesomeIcon icon={faHardHat} />
      Build your components here
      <ContactDetails
        name={name}
        email={email}
      />
      <SalesOverview
        salesOverview={salesOverview}
      />
    </div>
  )
}

AccountOverview.propTypes = {
  supportContact: shape({
    name: string,
    email: string,
  }).isRequired,
  salesOverview: shape({
    uploads: number,
    successfulUploads: number,
    linesAttempted: number,
    linesSaved: number,
    lastUploadDate: number,
  }).isRequired,
};

export default AccountOverview;