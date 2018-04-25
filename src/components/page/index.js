import React from 'react';
import { Grid, Row, Col } from '@nordnet/grid';

export const Page = ({ children }) => (
    <Grid>
    <Row>
      <Col xs={12} sm={8} md={6} lg={4}>
        {children}
      </Col>
    </Row>
  </Grid>
)