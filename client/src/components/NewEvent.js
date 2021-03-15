import React, {useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import API from '../utils/API'
import { HistoryContext } from '../HistoryContext';
import { useHistory } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function NewEvent() {
  const context = useContext(UserContext);
  const historyContext = useContext(HistoryContext);
  const [date, setDate] = useState(new Date());
  const [rows, setRows] = useState([]);
  const [value, setValue] = useState(null);


  let history = useHistory();

  const [newEvent, setNewEvent] = useState({
    id: context.id,
    datetime: date,
    eventLocation: null
  })

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewEvent({...newEvent, [evt.target.name]: value})
  }
  
  const onEventSubmit = (evt) => {
    evt.preventDefault();
    API.createNewEvent({...newEvent, eventLocation: value.value.place_id})
    .then(res => console.log('res', res))
    .catch(err => console.log(err))
    historyContext(history, "/home")
  }

  return (
    <form>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Meeting with:</label>
        <input type="text" class="form-control" placeholder="Default input" name="personName" value={newEvent.personName} onChange={handleInputChange}/>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Link to social media:</label>
        <input type="text" class="form-control" placeholder="Default input" name="socialMedia" value={newEvent.socialMedia} onChange={handleInputChange}/>
      </div>
      <button type="submit" class="btn btn-primary" onClick={onEventSubmit}>Submit</button>
      </div>
      <div>
    </div>
    <DateTimePicker
        onChange={setDate}
        value={date}
        format="y-MM-dd h:mm"
        minDate={new Date()}
      />
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
    </form>
  )
}