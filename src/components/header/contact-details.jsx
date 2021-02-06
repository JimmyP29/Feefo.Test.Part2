import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from '../styles/grid';
import { GreyText, BoldText, Text } from '../styles/content';


const Details = styled.div`
display: flex;
  justify-content: flex-start;
`;

const Square = styled.div`
padding: 25px;
border-radius: 25, 25;
background-color: yellow;
`;
const ContactDetails = ({ name, email }) => {
  return (
    <Grid>
      <Row>
        <BoldText>
          <GreyText>YOUR FEEFO SUPPORT CONTACT</GreyText>
        </BoldText>
      </Row>
      <Row>
        <Col size={1}>
          <Square>
            <BoldText>S</BoldText>
          </Square>
        </Col>
        <Col size={5}>
          <Row>
            <BoldText>{name}</BoldText>
          </Row>
          <Row>
            <FontAwesomeIcon icon={faEnvelope} />
            <Text>{email}</Text>
          </Row>
        </Col>
        <Col size={5}>
          <Text>020 3362 4208</Text>
        </Col>
      </Row>
    </Grid>
    // {/* </Details> */ }
  );
};

ContactDetails.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
};

export default ContactDetails;
