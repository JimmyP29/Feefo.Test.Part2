import React from 'react';
import { string, number, shape } from 'prop-types';

import ContactDetails from './header/contact-details';
import SalesOverview from './body/sales-overview';
import { MainWrapper, Title } from './styles/content';
import { Grid, Row, Col } from './styles/grid';

export const AccountOverview = ({ data }) => {
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
  }),
  salesOverview: shape({
    uploads: number,
    successfulUploads: number,
    linesAttempted: number,
    linesSaved: number,
  }),
};

AccountOverview.defaultProps = {
  data: {
    supportContact: {
      name: '',
      email: '',
    },
    salesOverview: {
      uploads: 0,
      successfulUploads: 0,
      linesAttempted: 0,
      linesSaved: 0,
    },
  }
};

export default AccountOverview;
