import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from '../styles/grid';
import { GreyText, BoldText, Text } from '../styles/content';
import { PaddingLeft, PaddingBottom } from '../styles/layout';
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
            <Row>
              <PaddingLeft>
                <BoldText>{name}</BoldText>
              </PaddingLeft>
            </Row>
            <Row>
              <PaddingLeft>
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <Text>{email}</Text>
              </PaddingLeft>
            </Row>
          </Col>
          <Col size={5}>
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
