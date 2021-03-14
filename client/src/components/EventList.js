import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import API from '../utils/API';

export default function EventList() {
  const userContext = useContext(UserContext);

  const [events, setEvents] = useState({
    isLoading: true,
    data: null
  })

  useEffect(() => {
    API.getEvents(userContext.id)
        .then(res => setEvents({...events, isLoading: false, data: res.data}) )
        .catch(err => console.log(err))
}, [])


  return (
    <div>
      <h2>Upcoming Events</h2>
            {events.isLoading ? (
                <p>I'm loading</p>
            ) : (
                <div>
                    <ul>
                        {events.data.map((event) => (<li>Meeting with {event.person_Name} on {event.event_Date} at {event.event_Time}</li>))}
                        <li>Safe Squad #1</li>
                        <li>Safe Squad #2</li>
                        <li>Safe Squad #3</li>
                    </ul>
                </div>
            )}
        </div>
  )
}