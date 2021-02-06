import React from 'react';
import { number, shape } from 'prop-types';
import SalesDetails from './sales-details';
import UploadDetails from './upload-details';
import LinesDetails from './lines-details';

const calculatePercentage = (totalValue, partialValue) => (
  parseInt(((totalValue / partialValue) % 100).toFixed(1, 10))
);

const SalesOverview = ({ salesOverview }) => {

  const {
    uploads,
    successfulUploads,
    linesSaved,
    linesAttempted,
  } = salesOverview;
  return (
    <>
      <SalesDetails
        numberOfUploads={successfulUploads}
        numberOfLines={linesSaved}
      />
      <UploadDetails
        uploadPercentage={calculatePercentage(uploads, successfulUploads)}
      />
      <LinesDetails
        linePercentage={calculatePercentage(linesAttempted, linesSaved)}
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
