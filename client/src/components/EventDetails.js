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
      body: "",
      name: null
    },
    submitting: false,
    error: false,
  })

  const sendAlert = (e) => {
    e.preventDefault();

    squadNumbers.forEach((member) => {
      const currentState = request.message;
      const { value } = e.target;
      currentState.to = member.member_phone_number;
      currentState.body = value;
      currentState.name = e.target.name
      setRequest({ message: currentState })

      setRequest({
        ...request,
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
            console.log('FRONTEND RES', res.json())
        // I think this is where we will make a post request to save the alerts?? then we will need to do a useeffect on page load to query the alerts
            setRequest({
              error: false,
              submitting: false,
              message: {
                to: '',
                body: ''
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
        });
    })

  }

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
      {eventDetails.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {userContext.isLoggedIn ? (
            <div>
              <Button 
                value={`${`Msg from IMOK squad member ${userContext.firstName}: Made it to the meeting spot`}`} 
                onClick={sendAlert}
                name="Arrived"
              >
                  Arrived
              </Button>
              <Button 
                value={`${`Msg from IMOK squad member ${userContext.firstName}: Bored but imok`}`} 
                onClick={sendAlert}
                name="Bored but imok"
              >
                  Bored but imok
              </Button>
              <Button 
                value={`${`Msg from IMOK squad member ${userContext.firstName}: Having a good time, signing off!`}`} 
                onClick={sendAlert}
                name="Having a good time"
              >
                Having a good time
              </Button>
              <Button 
                value={`${`Msg from IMOK squad member ${userContext.firstName}: Feeling uncomfortable, be on standby`}`} 
                onClick={sendAlert}
                name="Be on standby"
                >
                  Be on standby
              </Button>
              <Button 
                value={`${`Msg from IMOK squad member ${userContext.firstName}: SOS feel unsafe`}`} 
                onClick={sendAlert}
                name="SOS"
              >
                SOS
              </Button>
              <Button 
                value={`${`Msg from IMOK squad member ${userContext.firstName}: "Made it home/somewhere, am safe for the night`}`} 
                onClick={sendAlert}
                >
                  Safe for the night
              </Button>
              <Button 
                value={`${`Msg from IMOK squad member ${userContext.firstName}: "Morning after, things are still good`}`} 
                onClick={sendAlert}
                name="Morning after..."
              >
                Morning after...
              </Button>
              <h3>Meeting with: {eventDetails.data.person_Name}</h3>
              <h3>Date: {new Date(eventDetails.data.event_DateTime).toDateString()}</h3>
              <h3>Time: {new Date(eventDetails.data.event_DateTime).toLocaleTimeString().slice(0,4)} {new Date(eventDetails.data.event_DateTime).toLocaleTimeString().slice(8,11)}</h3>
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
            : (
              <div>
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
            )}
        </div>
      )}
    </div>
  )

};