import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from '../styles/grid';
import { GreyText, BoldText, Text } from '../styles/content';
import { PaddingLeft, PaddingBottom, PaddingTop } from '../styles/layout';
import SupportSquare from './support-square';

const ContactDetails = ({ name, email }) => {
  return (
    <Grid>
      <PaddingBottom>
        <Row>
          <PaddingBottom>
            <BoldText>
              <GreyText>YOUR FEEFO SUPPORT CONTACT</GreyText>
            </BoldText>
          </PaddingBottom>
        </Row>
        <Row>
          <Col size={1}>
            <SupportSquare />
          </Col>
          <Col size={5}>
            <PaddingTop percentage={1}>
              <Row>
                <BoldText>{name}</BoldText>
              </Row>
            </PaddingTop>
            <Row>
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <PaddingLeft percentage='1'>
                <Text>{email}</Text>
              </PaddingLeft>
            </Row>
          </Col>
          <Col size={1}>
            <Text>020 3362 4208</Text>
          </Col>
        </Row>
      </PaddingBottom>
    </Grid>
  );
};

ContactDetails.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
};

export default ContactDetails;
