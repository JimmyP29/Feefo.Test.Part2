import React from 'react';
import { string } from 'prop-types';

const ContactDetails = ({ name, email }) => {
  return (
    <>
      <span>
        {name}
      </span>
      <span>
        {email}
      </span>
    </>
  );
};

ContactDetails.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
};

export default ContactDetails;
