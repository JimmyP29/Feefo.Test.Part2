import React from 'react';
import { string, number, shape } from 'prop-types';

import ContactDetails from './header/contact-details';
import SalesOverview from './body/sales-overview';
import { MainWrapper, Title } from './styles/content';
import { Grid, Row, Col } from './styles/grid';


// const AccountHeader = styled.div`
//     color: #282c34;
//    // min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     //align-items: center;
//     justify-content: flex-start;
//     //font-size: calc(10px + 2vmin);
// `;

export const AccountOverview = ({ data }) => {
  console.log(data);
  const {
    supportContact: { name, email },
    salesOverview,
  } = data;
  return (
    <>
      <MainWrapper>
        <Grid>
          <Row>
            <Col size={1}>
              <Title>Account Overview</Title>
            </Col>
            <Col size={1}>
              <ContactDetails
                name={name}
                email={email}
              />
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              <SalesOverview
                salesOverview={salesOverview}
              />
            </Col>
          </Row>
        </Grid>
      </MainWrapper>
    </>
  )
}

AccountOverview.propTypes = {
  supportContact: shape({
    name: string,
    email: string,
  }).isRequired,
  salesOverview: shape({
    uploads: number,
    successfulUploads: number,
    linesAttempted: number,
    linesSaved: number,
    lastUploadDate: number,
  }).isRequired,
};

export default AccountOverview;
