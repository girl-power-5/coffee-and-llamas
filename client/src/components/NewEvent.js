import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import API from '../utils/API'
import { HistoryContext } from '../HistoryContext';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function NewEvent() {
  const context = useContext(UserContext);
  const historyContext = useContext(HistoryContext);
  const [rows, setRows] = useState([]);
  const [value, setValue] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());

  let history = useHistory();

  const [newEvent, setNewEvent] = useState({
    id: context.id,
    datetime: selectedDate,
    eventLocation: null
  })

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewEvent({ ...newEvent, [evt.target.name]: value })
  }

  const onEventSubmit = (evt) => {
    evt.preventDefault();
    API.createNewEvent({ ...newEvent, eventLocation: value.value.place_id })
      .then(res => console.log('res', res))
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