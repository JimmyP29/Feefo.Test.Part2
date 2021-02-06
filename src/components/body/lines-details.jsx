import React from 'react';
import { number } from 'prop-types';
import { Grid, Row } from '../styles/grid';
import { PercentageText, GreyText } from '../styles/content';

const LinesDetails = ({ linePercentage }) => (
  <Grid>
    <Row>
      <PercentageText>
        {`${linePercentage}%`}
      </PercentageText>
    </Row>
    <Row>
      <GreyText>LINES SAVED</GreyText>
    </Row>
  </Grid>
);

LinesDetails.propTypes = {
  linePercentage: number,
};

LinesDetails.defaultProps = {
  linePercentage: 0,
};

export default LinesDetails;
