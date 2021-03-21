import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SafetySquad from './SafetySquad'
import EventList from './EventList'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
                
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <SafetySquad />
              </Col>
            </Row>
            <Row>
              <Col >
                 <EventList/> 
               
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
      <Footer />
    </React.Fragment>
  )
}