import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/API';
import { UserContext } from '../UserContext';
import { Form, Col, Row, Button } from 'react-bootstrap';

export default function EventDetails() {
  const userContext = useContext(UserContext);
  let { eventId } = useParams();

  const [eventDetails, setEventDetails] = useState({
    isLoading: true,
    data: null,
  })

  useEffect(() => {
    API.getEventDetails(userContext.id, eventId)
    .then(res => setEventDetails({...eventDetails, data: res.data[0].events[0], isLoading: false }))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {eventDetails.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Button>ALERT 1</Button>
          <Button>ALERT 2</Button>
          <Button>ALERT 3</Button>
          <Button>ALERT 3</Button>
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
        </div>
      )
      }
    </div>
  )
};