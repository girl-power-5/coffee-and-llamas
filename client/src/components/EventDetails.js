import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/API';
import { UserContext } from '../UserContext';
import { Form, Col, Row, Button, ListGroup } from 'react-bootstrap';
import AlertHistory from './AlertHistory';
import Container from 'react-bootstrap/Container'
import '../../src/App.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableRow';
import Alert from 'react-bootstrap/Alert';

export default function EventDetails() {
  const userContext = useContext(UserContext);
  let { eventId } = useParams();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState();

  const [eventDetails, setEventDetails] = useState({
    isLoading: true,
    data: null,
  })

  const [squadNumbers, setSquadNumbers] = useState([])

  const [request, setRequest] = useState({
    message: {
      to: "",
      body: "",
      alertType: null
    },
    submitting: false,
    error: false,
  })

  const sendAlert = ((e) => {
    e.preventDefault();

    squadNumbers.forEach((member, index) => {
      const currentState = request.message;
      const { value } = e.target;
      currentState.to = member.member_phone_number;
      currentState.body = value;
      currentState.alertType = e.target.innerHTML
      setRequest({ message: currentState })

      setRequest({
        ...request,
        submitting: true
      });
      fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request.message)
      })
        .then((res) => {
          if (res.ok) {
            if (index === squadNumbers.length - 1) {
              API.saveAlert(eventId, request.message)
                .then((res) => console.log('ALERT', res))
                .catch((err) => console.log(err))

                setShow(true)
                setAlert("The following message was sent to your safety squad: " + request.message.body)
            }

            setRequest({
              error: false,
              submitting: false,
              message: {
                to: '',
                body: '',
                alertType: null
              },
            });
          } else {
            setRequest({
              error: true,
              submitting: false
            });
          }
        })
        .catch(error => {
          console.error("Error fetching data: ", error);
        })
    })
  })

  useEffect(() => {
    API.getEventDetails(userContext.id, eventId)
      .then(res => {
        const event = res.data.filter((eventsArr) => {
          return eventsArr.events.length > 0
        })

        setEventDetails({ ...eventDetails, data: event[0].events[0], isLoading: false })
      })
      .catch(err => console.log(err))

    API.getSafetySquad(userContext.id)
      .then(res => setSquadNumbers(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Container fluid>
      {show ? (      
        <div class="col-lg-5 mt-2">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {alert}
        </Alert>
      </div>
      ) : (
        <></>
      )}
        <AlertHistory
          eventId={eventId}
        />
        {eventDetails.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {userContext.isLoggedIn ? (
              <div style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>

                <Col lg={4} sm={12} xs={12}>
                  <br />
                  <Button variant="btn btn-outline-success mr-2" size="lg" block
                    value={`${`Msg from IMOK squad member ${userContext.firstName}: Made it to the meeting spot`}`}
                    onClick={sendAlert}
                    data-reactid="Arrived"
                  >
                    Arrived
              </Button>
                  <br />

                  <Button variant="btn btn-outline-info mr-2" size="lg" block
                    value={`${`Msg from IMOK squad member ${userContext.firstName}: Bored but imok`}`}
                    onClick={sendAlert}
                    name="Bored but imok"
                  >
                    Bored
              </Button>
                  <br />

                  <Button variant="btn btn-outline-success mr-2" size="lg" block
                    value={`${`Msg from IMOK squad member ${userContext.firstName}: Having a good time, signing off!`}`}
                    onClick={sendAlert}
                    name="Having a good time"
                  >
                    Good
              </Button>
                  <br />


                  <Button variant="btn btn-outline-warning mr-2" size="lg" block
                    value={`${`Msg from IMOK squad member ${userContext.firstName}: Feeling uncomfortable, be on standby`}`}
                    onClick={sendAlert}
                    name="Be on standby"
                  >
                    Standby
              </Button>
                  <br />


                  <Button variant="btn btn-danger btn-lg mr-2" size="lg" block
                    value={`${`Msg from IMOK squad member ${userContext.firstName}: SOS feel unsafe`}`}
                    onClick={sendAlert}
                    name="SOS"
                  >
                    SOS
              </Button>
                  <br />

                  <Button variant="btn btn-outline-success mr-2" size="lg" block
                    value={`${`Msg from IMOK squad member ${userContext.firstName}: "Made it home/somewhere, am safe for the night`}`}
                    onClick={sendAlert}
                  >
                    Safe
              </Button>
                  <br />

                  <Button variant="btn btn-outline-info mr-2" size="lg" block
                    value={`${`Msg from IMOK squad member ${userContext.firstName}: "Morning after, things are still good`}`}
                    onClick={sendAlert}
                    name="Morning after..."
                  >
                    Morning
              </Button>
                  <br />
                </Col>

                <Col xs={12} sm={12} lg={8}>
                  <br />

                  <TableRow class="table-light">
                    <TableCell><h4>Meeting with: {eventDetails.data.person_Name}</h4></TableCell>
                    <TableCell ><h4>Date: {new Date(eventDetails.data.event_DateTime).toDateString()}</h4></TableCell>
                    <TableCell ><h4>Time: {new Date(eventDetails.data.event_DateTime).toLocaleTimeString().slice(0, 5)} {new Date(eventDetails.data.event_DateTime).toLocaleTimeString().slice(8, 11)}</h4></TableCell>
                  </TableRow>
                  <iframe
                    title="eventLocation"
                    width="100%"
                    height="80%"
                    loading="lazy"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAXVPS3WbHTDTRT1GM8NGIuDjbKSfS2sU4&q=place_id:${eventDetails.data.event_Location}`}>
                  </iframe>
                </Col>
              </div>
              
            )
              : (
                <div>
                  {/* 
                <h3>Meeting with: {eventDetails.data.person_Name}</h3>
                <h3>When: {eventDetails.data.event_DateTime}</h3>
                <iframe
                  title="eventLocation"
                  width="600"
                  height="450"
                  loading="lazy"
                  allowfullscreen
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAXVPS3WbHTDTRT1GM8NGIuDjbKSfS2sU4&q=place_id:${eventDetails.data.event_Location}`}>
                </iframe>
                 */}
                </div>
              )}
          </div>
        )}
      </Container>
    </div>
  )

};