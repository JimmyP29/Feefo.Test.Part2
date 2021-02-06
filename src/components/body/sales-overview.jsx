import React from 'react';
import SalesDetails from './sales-details';
import UploadDetails from './upload-details';
import LinesDetails from './lines-details';

const SalesOverview = () => {
  return (
    <>
      <SalesDetails />
      <UploadDetails />
      <LinesDetails />
    </>
  );
};

export default SalesOverview;
