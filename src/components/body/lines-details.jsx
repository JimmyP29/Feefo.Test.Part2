import React from 'react';
import { number } from 'prop-types';

const LinesDetails = ({ linePercentage }) => {
    console.log(linePercentage);
    return (
        <>
            {`${linePercentage}%`}
            <span>LINES SAVED</span>
        </>
    );
};

LinesDetails.propTypes = {
    linePercentage: number,
};

LinesDetails.defaultProps = {
    linePercentage: 0,
};

export default LinesDetails;
