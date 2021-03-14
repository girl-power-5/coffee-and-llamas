import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CurrentEvent from './CurrentEvent'
import SafetySquad from './SafetySquad'
import SafetySquadActivity from './SafetySquadActivity'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import API from '../utils/API'

export default function Home({ userStatus }) {

  const { isLoggedIn, firstName } = userStatus;
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <div>
          <Container>
            <Row>
              <Col sm={12}>
                <Header firstName={firstName} />
              </Col>
            </Row>

            <Row>
              <Col sm={5}>
                <CurrentEvent />
              </Col>
            </Row>

            <Row>
              <Col sm={5}>
                <SafetySquad />
              </Col>
              <Col sm={5}>
                <SafetySquadActivity />
              </Col>
            </Row>
          </Container>
          <Route path="/safetysquad">
              <SafetySquad />
            </Route>
        </div>
      ) : (
        <p>Error: this page is for logged in users only!</p>
      )}
    </React.Fragment>
  )
}