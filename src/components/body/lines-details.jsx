import React from 'react';
import { number } from 'prop-types';

const LinesDetails = ({ linePercentage }) => (
  <>
    {`${linePercentage}%`}
    <span>LINES SAVED</span>
  </>
);

LinesDetails.propTypes = {
  linePercentage: number,
};

LinesDetails.defaultProps = {
  linePercentage: 0,
};

export default LinesDetails;
