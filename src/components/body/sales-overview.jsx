import React from 'react';
import { number, shape } from 'prop-types';
import SalesDetails from './sales-details';
import UploadDetails from './upload-details';
import LinesDetails from './lines-details';
import { Grid, Row, Col } from '../styles/grid';
import { TileWrapper, TileTop, TileBottomLeft, TileBottomRight } from '../styles/content';

// const calculatePercentage = (totalValue, partialValue) => (
//   ((totalValue / partialValue) * 100).toFixed(0, 10)
// );
const calculatePercentage = (totalValue, partialValue) => {
  if (!totalValue || !partialValue)
    return 'Please supply valid numbers for calculation.'

  if (partialValue > totalValue)
    return `Partial value (${partialValue}) cannot be greater than total value (${totalValue}).`

  return ((totalValue / partialValue) * 100).toFixed(0, 10)
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

export default SalesOverview;
