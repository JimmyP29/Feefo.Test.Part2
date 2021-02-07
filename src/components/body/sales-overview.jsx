import React from 'react';
import { number, shape } from 'prop-types';
import SalesDetails from './sales-details';
import UploadDetails from './upload-details';
import LinesDetails from './lines-details';
import { Grid, Row, Col } from '../styles/grid';
import { TileWrapper, TileTop, TileBottomLeft, TileBottomRight } from '../styles/content';

const validateValues = (totalValue, partialValue) => {
  // Because 0 is an acceptable value the check for falsey needs to be more explicit.
  const falsey = (value) => (value !== 0 && !value);

  if (falsey(totalValue) || falsey(partialValue))
    return 'Please supply valid numbers for calculation.'

  if (partialValue > totalValue)
    return `Partial value (${partialValue}) cannot be greater than total value (${totalValue}).`

  return;
};

const calculatePercentage = (totalValue, partialValue) => {
  const validationMessage = validateValues(totalValue, partialValue);

  if (validationMessage)
    return validationMessage;
  else if (totalValue === 0 || partialValue === 0) {
    return '0';
  } else {
    const division = (((partialValue % totalValue) / totalValue) * 100);
    if (division % 100 === 0)
      return ((totalValue / partialValue) * 100).toFixed(0, 10).toString()
    else
      return division.toFixed(0, 10).toString();
  }
};

const SalesOverview = ({ salesOverview }) => {
  const {
    uploads,
    successfulUploads,
    linesSaved,
    linesAttempted,
  } = salesOverview;

  return (
    <TileWrapper>
      <Grid>
        <Row>
          <Col size={1}>
            <TileTop>
              <SalesDetails
                numberOfUploads={successfulUploads}
                numberOfLines={linesSaved}
              />
            </TileTop>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <TileBottomLeft>
              <UploadDetails
                uploadPercentage={calculatePercentage(uploads, successfulUploads)}
              />
            </TileBottomLeft>
          </Col>
          <Col size={1}>
            <TileBottomRight>
              <LinesDetails
                linePercentage={calculatePercentage(linesAttempted, linesSaved)}
              />
            </TileBottomRight>
          </Col>
        </Row>
      </Grid>
    </TileWrapper>
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

SalesOverview.defaultProps = {
  salesOverview: {
    uploads: 0,
    successfulUploads: 0,
    linesAttempted: 0,
    linesSaved: 0,
    lastUploadDate: 0,
  },
};


export default SalesOverview;
