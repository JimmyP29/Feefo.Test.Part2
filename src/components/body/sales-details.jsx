import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from '../styles/grid';
import { Text, BoldText, BlueIcon, GreyIcon } from '../styles/content';
import { PaddingTop, PaddingLeft } from '../styles/layout';

const SalesDetails = ({ numberOfUploads, numberOfLines }) => {
  const tippyText = `You had ${numberOfUploads} uploads and ` +
    `${numberOfLines} lines added.`

  return (
    <Grid>
      <Row>
        <Col>
          <span aria-hidden="true">
            <BlueIcon>
              <FontAwesomeIcon icon={faUpload} />
            </BlueIcon>
          </span>
        </Col>
        <Col size={1}>
          <PaddingLeft percentage={1}>
            <BoldText>Sales</BoldText>
          </PaddingLeft>
        </Col>
        <Col>
          <span aria-hidden="true">
            <Tippy content={tippyText}>
              <GreyIcon>
                <FontAwesomeIcon icon={faInfoCircle} />
              </GreyIcon>
            </Tippy>
          </span>
        </Col>
      </Row>
      <PaddingTop percentage={1}>
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
      </PaddingTop>
    </Grid>
  );
}

SalesDetails.propTypes = {
  numberOfUploads: number.isRequired,
  numberOfLines: number.isRequired,
};

SalesDetails.defaultProps = {
  numberOfUploads: 0,
  numberOfLines: 0,
};

export default SalesDetails;
