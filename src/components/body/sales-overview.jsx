import React from 'react';
import { number, shape } from 'prop-types';
import SalesDetails from './sales-details';
import UploadDetails from './upload-details';
import LinesDetails from './lines-details';
import { Grid, Row, Col } from '../styles/grid';
import styled from 'styled-components';

const Tile = styled.div`
  background-color: white;
  border-bottom: lightblue solid 2px;
  border-left: lightblue solid 2px;
  border-right: lightblue solid 2px;
  padding: 2%;
`;

const calculatePercentage = (totalValue, partialValue) => (
  parseInt(((totalValue / partialValue) % 100).toFixed(1, 10))
);

const SalesOverview = ({ salesOverview }) => {

  const {
    uploads,
    successfulUploads,
    linesSaved,
    linesAttempted,
  } = salesOverview;
  return (
    <>
      <Grid>
        <Row>
          <Col size={1}>
            <Tile>
              <SalesDetails
                numberOfUploads={successfulUploads}
                numberOfLines={linesSaved}
              />
            </Tile>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Tile>
              <UploadDetails
                uploadPercentage={calculatePercentage(uploads, successfulUploads)}
              />
            </Tile>
          </Col>
          <Col size={1}>
            <Tile>
              <LinesDetails
                linePercentage={calculatePercentage(linesAttempted, linesSaved)}
              />
            </Tile>
          </Col>
        </Row>
      </Grid>
    </>
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
