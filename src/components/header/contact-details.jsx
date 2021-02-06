import React from 'react';
import PropTypes from 'prop-types';

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
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactDetails;
