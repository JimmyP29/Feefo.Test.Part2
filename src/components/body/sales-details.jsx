import React from 'react';
import { number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from '../styles/grid';
import { Text, BoldText, BlueIcon, GreyIcon } from '../styles/content';

const SalesDetails = ({ numberOfUploads, numberOfLines }) => (
  <Grid>
    <Row>
      <Col size={1}>
        <BlueIcon>
          <FontAwesomeIcon icon={faUpload} />
        </BlueIcon>
        <BoldText>Sales</BoldText>
      </Col>
      <Col size={1}>
        <GreyIcon>
          <FontAwesomeIcon icon={faInfoCircle} />
        </GreyIcon>
      </Col>
    </Row>
    <Row>
      <Col size={1}>
        <Text>
          You had
          <BoldText> {numberOfUploads} uploads </BoldText>
          and
          <BoldText> {numberOfLines} lines </BoldText>
          added.
          </Text>
      </Col>
    </Row>
  </Grid>
);

SalesDetails.propTypes = {
  numberOfUploads: number.isRequired,
  numberOfLines: number.isRequired,
};

SalesDetails.defaultProps = {
  numberOfUploads: 0,
  numberOfLines: 0,
};

export default SalesDetails;
