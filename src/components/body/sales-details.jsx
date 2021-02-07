import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from '../styles/grid';
import { Text, BoldText, BlueIcon, GreyIcon } from '../styles/content';

const SalesDetails = ({ numberOfUploads, numberOfLines }) => (
  <Grid>
    <Row>
      <Col size={1}>
        <span aria-hidden="true">
          <BlueIcon>
            <FontAwesomeIcon icon={faUpload} />
          </BlueIcon>
        </span>
        <BoldText>Sales</BoldText>
      </Col>
      <Col>
        <span aria-hidden="true">
          <Tippy content={'Hello, here is some information...'}>
            <GreyIcon>
              <FontAwesomeIcon icon={faInfoCircle} />
            </GreyIcon>
          </Tippy>
        </span>
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
