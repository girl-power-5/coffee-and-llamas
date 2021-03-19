import React, { useState, useEffect, useCallback, useMemo } from 'react';
import API from '../utils/API';
import { Col, ListGroup } from 'react-bootstrap';

export default function AlertHistory({eventId}) {

  const [alertHistory, setAlertHistory] = useState({
    isLoading: true,
    alertList: []
  })

  const alertHTML = alertHistory.alertList.map((alert) => {
    <Col lg={6} sm={10}>
      <ListGroup variant="flush">
        <ListGroup.Item>{alert.alert_name}</ListGroup.Item>
      </ListGroup>
    </Col>
  })


  const innerFunction = useCallback  (() => {
    API.getAlertHistory(eventId)
    .then(res => {
      console.log(res.data[0].alert_list)
      setAlertHistory({
        isLoading: false,
        alertList:  res.data[0].alert_list
      })
    })
    .catch(err => console.log(err))
}, [alertHistory.isLoading, eventId]);

 
  useEffect(() => {
    async function fetchData() {
      API.getAlertHistory(eventId)
      .then(res => {
        console.log(res.data[0].alert_list)
        setAlertHistory({
          isLoading: false,
          alertList:  res.data[0].alert_list
        })
      })
      .catch(err => console.log(err))
    }
    fetchData()
    
    console.log('ALERTHISTORY??', alertHistory)
  }, [])


  return (
    <div>    
      {alertHistory ? (
      alertHistory.alertList.map((alert) => {
        {console.log('ALERTINMAP', alert)}
        <>
          <h1>hi</h1>
          <Col lg={6} sm={10}>
            <ListGroup variant="flush">
              <ListGroup.Item>{alert.alert_name}</ListGroup.Item>
            </ListGroup>
          </Col>
          </>
        }))
      : <p>test</p>}
        
      </div>
      
    
 
  )
}