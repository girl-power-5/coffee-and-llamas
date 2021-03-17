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

  const [squadNumbers, setSquadNumbers] = useState([])

  const [request, setRequest] = useState({
    message: {
      to: "",
      body: ""
    },
    submitting: false,
    error: false
  })

  const sendAlert = (e) => {
    e.preventDefault();

    squadNumbers.forEach((member)=> {
    const currentState = request.message;
    const { value } = e.target;
    currentState.to = member.member_phone_number;
    currentState.body = value;
    setRequest({message: currentState})
    
    setRequest({ ...request, 
      submitting: true 
    });
    console.log('REQUEST TWILIO', request)
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.message)
    })
      .then((res) => {
        if (res.ok) {
          alert("it worked!")

          console.log('RESPONSE', res.json())
          setRequest({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
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
      });
    })
 
  }

  useEffect(() => {
    API.getEventDetails(userContext.id, eventId)
    .then(res => setEventDetails({...eventDetails, data: res.data[0].events[0], isLoading: false }))
    .catch(err => console.log(err))

    API.getSafetySquad(userContext.id)
    .then(res => setSquadNumbers(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {eventDetails.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Button value={`${`Msg from IMOK squadmember ${userContext.firstName}: Made it to the meeting spot`}`} onClick={sendAlert}>Arrived</Button>
          <Button value={`${`Msg from IMOK squadmember ${userContext.firstName}: Bored but imok`}`} onClick={sendAlert}>Bored but imok</Button>
          <Button value={`${`Msg from IMOK squadmember ${userContext.firstName}: Having a good time, signing off!`}`} onClick={sendAlert}>Having a good time</Button>
          <Button value={`${`Msg from IMOK squadmember ${userContext.firstName}: Feeling uncomfortable, be on standby`}`} onClick={sendAlert}>Be on standby</Button>
          <Button value={`${`Msg from IMOK squadmember ${userContext.firstName}: "SOS feel unsafe`}`} onClick={sendAlert}>SOS</Button>
          <Button value={`${`Msg from IMOK squadmember ${userContext.firstName}: "Made it home/somewhere, am safe for the night`}`} onClick={sendAlert}>Safe for the night</Button>
          <Button value={`${`Msg from IMOK squadmember ${userContext.firstName}: "Morning after, things are still good`}`} onClick={sendAlert}>Morning after...</Button>
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