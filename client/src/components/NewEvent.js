import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import API from '../utils/API'
import { HistoryContext } from '../HistoryContext';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function NewEvent() {
  const userContext = useContext(UserContext);
  const historyContext = useContext(HistoryContext);
  const [rows, setRows] = useState([]);
  const [value, setValue] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());

  let history = useHistory();
  let location = useLocation();

  const [newEvent, setNewEvent] = useState({
    id: userContext.id,
    datetime: selectedDate,
    eventLocation: null
  })
  const [request, setRequest] = useState({
    message: {
      to: "",
      body: ""
    },
    submitting: false,
    error: false
  })
  const [squadNumbers, setSquadNumbers] = useState([])

  useEffect(() => {
    API.getSafetySquad(userContext.id)
      .then(res => setSquadNumbers(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewEvent({ ...newEvent, [evt.target.name]: value })
  }

  const onEventSubmit = (evt) => {
    evt.preventDefault();
    API.createNewEvent({ ...newEvent, eventLocation: value.value.place_id })
      .then(res => {
        const parsedRes = JSON.parse(res.config.data)
        const eventLink = "https://imok-squad.herokuapp.com" + location.pathname + "/" + parsedRes.id
      
        squadNumbers.forEach((member) => {
          const currentState = request.message;
          currentState.to = member.member_phone_number;
          currentState.body = "IMOK squad member " + userContext.firstName + " created an event.  See the details here: " + eventLink
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
        

      })
      .catch(err => console.log(err))
    historyContext(history, "/home")
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  return (
    <form>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Meeting with:</label>
        <input type="text" class="form-control" placeholder="Default input" name="personName" value={newEvent.personName} onChange={handleInputChange} />
        <div class="form-group">
          <label class="col-form-label" for="inputDefault">Link to social media:</label>
          <input type="text" class="form-control" placeholder="Default input" name="socialMedia" value={newEvent.socialMedia} onChange={handleInputChange} />
        </div>
      </div>

      {/* <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Event Date and Time"
            type="datetime-local"
            className={classes.textField}
             InputLabelProps={{
               shrink: true,
             }}
          />
        </form> */}

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          label="Date & time of event"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>

      <GooglePlacesAutocomplete
        placeholder="Type in an address"
        inputStyle={{
          height: 40,
          fontSize: 28
        }}
        suggestionsStyles={{
          container: {
            padding: 16,
            background: "#efefef"
          },
          suggestion: {
            background: "#eee",
            cursor: "pointer"
          },
          suggestionActive: {
            background: "#bbb"
          }
        }}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
      <button type="submit" class="btn btn-primary" onClick={onEventSubmit}>Submit</button>
    </form>
  )
}