import React from 'react';
import { number, shape } from 'prop-types';
import SalesDetails from './sales-details';
import UploadDetails from './upload-details';
import LinesDetails from './lines-details';

const calculateLinePercentage = (linesAttempted, linesSaved) => (linesAttempted / linesSaved);

const SalesOverview = ({ salesOverview }) => {

  const { successfulUploads, linesSaved, linesAttempted } = salesOverview;
  return (
    <>
      <SalesDetails
        numberOfUploads={successfulUploads}
        numberOfLines={linesSaved}
      />
      <UploadDetails />
      <LinesDetails
        linePercentage={calculateLinePercentage(linesAttempted, linesSaved)}
      />
    </>
  );
};

SalesOverview.propTypes = {
  salesOverview: shape({
    uploads: number,
    successfulUploads: number,
    linesAttempted: number,
    linesSaved: number,
    lastUploadDate: number,
  }).isRequired,
};

export default SalesOverview;
