import React from 'react';
import { number } from 'prop-types';
import { Grid, Row } from '../styles/grid';
import { PercentageText, GreyText } from '../styles/content';

const UploadDetails = ({ uploadPercentage }) => (
  <Grid>
    <Row>
      <PercentageText>
        {`${uploadPercentage}%`}
      </PercentageText>
    </Row>
    <Row>
      <GreyText>UPLOAD SUCCESS</GreyText>
    </Row>
  </Grid>
);

UploadDetails.propTypes = {
  uploadPercentage: number,
};

UploadDetails.defaultProps = {
  uploadPercentage: 0,
};

export default UploadDetails;
