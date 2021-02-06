import React from 'react';
import { number } from 'prop-types';

const UploadDetails = ({ uploadPercentage }) => (
  <>
    {`${uploadPercentage}%`}
    <span>UPLOAD SUCCESS</span>
  </>
);

UploadDetails.propTypes = {
  uploadPercentage: number,
};

UploadDetails.defaultProps = {
  uploadPercentage: 0,
};

export default UploadDetails;
