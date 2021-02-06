import React from 'react';
import { number } from 'prop-types';

const SalesDetails = ({ numberOfUploads, numberOfLines }) => (
  <>
    <span>{`You had ${numberOfUploads} uploads and ${numberOfLines} lines added.`}</span>
  </>
);

SalesDetails.propTypes = {
  numberOfUploads: number.isRequired,
  numberOfLines: number.isRequired,
};

SalesDetails.defaultProps = {
  numberOfUploads: 0,
  numberOfLines: 0,
};

export default SalesDetails;
