import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import { HistoryContext } from '../HistoryContext';
import { useHistory } from 'react-router-dom';
import API from '../utils/API';
import { Row, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow class="table-dark">
            <TableCell>Meeting with</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.data.map((event) => (
            <TableRow key={event.person_Name}>
              <TableCell component="th" scope="row">
                {event.person_Name}
              </TableCell>
              <TableCell>{new Date(event.event_DateTime).toDateString()}</TableCell>
              <TableCell>{new Date(event.event_DateTime).toLocaleTimeString().slice(0,4)} {new Date(event.event_DateTime).toLocaleTimeString().slice(8,11)}</TableCell>
              <TableCell><Button onClick={onEventClick} value={event._id}>View event</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                    
                </div>
            )}
        </div>
  )
}