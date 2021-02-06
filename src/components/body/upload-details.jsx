import React from 'react';
import { number } from 'prop-types';

const UploadDetails = ({ uploadPercentage }) => {
    console.log(uploadPercentage);
    return (<>Upload details</>);
};

UploadDetails.propTypes = {
    uploadPercentage: number.isRequired,
};

export default UploadDetails;
