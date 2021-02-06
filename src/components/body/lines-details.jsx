import React from 'react';
import { number } from 'prop-types';

const LinesDetails = ({ linePercentage }) => {
    console.log(linePercentage);
    return (<>Lines details</>);
};

LinesDetails.propTypes = {
    uploadPercentage: number.isRequired,
};

export default LinesDetails;
