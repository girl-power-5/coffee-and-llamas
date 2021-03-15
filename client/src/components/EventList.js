import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import { HistoryContext } from '../HistoryContext';
import { useHistory } from 'react-router-dom';
import API from '../utils/API';
import { Row, Button } from 'react-bootstrap';

export default function EventList() {
  let history = useHistory()
  const userContext = useContext(UserContext);
  const historyContext = useContext(HistoryContext);
  
  const [events, setEvents] = useState({
    isLoading: true,
    data: null
  })

  useEffect(() => {
    API.getEvents(userContext.id)
        .then(res => setEvents({...events, isLoading: false, data: res.data}) )
        .catch(err => console.log(err))
  }, [])

  const onEventClick = (e) => {
    e.preventDefault();
    historyContext(history, "/eventdetails/" + e.target.value)
  }

  return (
    <div>
      <h2>Upcoming Events</h2>
            {events.isLoading ? (
                <p>I'm loading</p>
            ) : (
                <div>
                    <ul>
                        {events.data.map((event) => (<Row><li>Meeting with {event.person_Name} on {event.event_DateTime} at {event.event_Time} <Button onClick={onEventClick} value={event._id}>View event details</Button></li></Row>))}
                    </ul>
                </div>
            )}
        </div>
  )
}