import React, { useState, useEffect, useCallback, useMemo } from 'react';
import API from '../utils/API';
import { Col, ListGroup, Accordion, Card, Button } from 'react-bootstrap';

export default function AlertHistory({ eventId }) {

  const [alertHistory, setAlertHistory] = useState({
    isLoading: true,
    alertList: []
  })

  useEffect(() => {
    API.getAlertHistory(eventId)
      .then(res => {
        setAlertHistory({
          isLoading: false,
          alertList: res.data[0].alert_list
        })
      })
      .catch(err => console.log(err))
  }, [])

  const alertHTML = alertHistory.alertList.map((alert) => (
    <li>{alert.alert_name}</li>
  ))

  return (
    <div>
      {alertHistory.isLoading ? (
        <p>No alerts have been sent to your IMOK squad yet.</p>
      ) : (
        <div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click here to see alerts sent to your safety squad.
                  </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{alertHTML}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      )}
    </div>
  )
}