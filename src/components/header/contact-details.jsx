import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from '../styles/grid';

const Text = styled.span`
  color: #B5B3B3;
`;

const Subtext = styled.span`
  color: #282c34;
`;

const Boldtext = styled(Text)`
font-weight: bold;
color: black;
`;

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
      <Row><Text>YOUR FEEFO SUPPORT CONTACT</Text></Row>
      <Row>
        <Col size={1}>
          <Square>S</Square>
        </Col>
        <Col size={5}>
          <Row>
            <Boldtext>
              {name}
            </Boldtext>
          </Row>
          <Row>
            <FontAwesomeIcon icon={faEnvelope} />
            <Subtext>{email}</Subtext>
          </Row>
        </Col>
        <Col size={5}>
          <Subtext>020 3362 4208</Subtext>
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
