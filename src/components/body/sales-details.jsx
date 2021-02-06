import React from 'react';
import { number } from 'prop-types';

const SalesDetails = ({ numberOfUploads, numberOfLines }) => {
    console.log(numberOfUploads);
    console.log(numberOfLines);
    return (<>Sales details</>);
};

SalesDetails.propTypes = {
    numberOfUploads: number.isRequired,
    numberOfLines: number.isRequired,
};
export default SalesDetails;
