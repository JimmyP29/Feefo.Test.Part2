import React from 'react';
import { string } from 'prop-types';
import { Grid, Row } from '../styles/grid';
import { PercentageText, GreyText, RedText } from '../styles/content';
import { PaddingTop } from '../styles/layout';

const UploadDetails = ({ uploadPercentage: renderValue }) => (
  <Grid>
    {
      isNaN(parseInt(renderValue)) ?
        (
          <Row>
            <PaddingTop percentage={8.7}>
              <RedText>{renderValue}</RedText>
            </PaddingTop>
          </Row>
        )
        :
        (
          <>
            <Row>
              <PercentageText>
                {`${renderValue}%`}
              </PercentageText>
            </Row>
            <Row>
              <GreyText>UPLOAD SUCCESS</GreyText>
            </Row>
          </>
        )
    }
  </Grid>
);

UploadDetails.propTypes = {
  uploadPercentage: string,
};

UploadDetails.defaultProps = {
  uploadPercentage: '',
};

export default UploadDetails;
