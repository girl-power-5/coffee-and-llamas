import React, {useState, useContext, useEffect} from 'react';
import { UserContext } from '../UserContext';
import API from '../utils/API'
import { HistoryContext } from '../HistoryContext';
import { useHistory } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import "react-google-places-autocomplete/dist/assets/index.css";

export default function NewEvent() {
  const context = useContext(UserContext);
  const historyContext = useContext(HistoryContext);
  const [date, setDate] = useState(new Date());
  const [rows, setRows] = useState([{place_id: "ChIJ7cv00DwsDogRAMDACa2m4K8"}]);

  let history = useHistory();

  const [newEvent, setNewEvent] = useState({
    id: context.id,
    datetime: date,
    eventLocation: rows[0].place_id
  })

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewEvent({...newEvent, [evt.target.name]: value})
  }
  
  const onEventSubmit = (evt) => {
    evt.preventDefault();
    API.createNewEvent(newEvent)
    .then(res => console.log('res', res))
    .catch(err => console.log(err))
    historyContext(history, "/home")
  }

  return (
    <form>
      {/* <div class="form-group">
        <label class="col-form-label" for="inputDefault">Date of the event:</label>
        <input type="text" class="form-control" placeholder="Default input" name="eventDate" value={newEvent.eventDate} onChange={handleInputChange}/>
      </div>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Time of the event:</label>
        <input type="text" class="form-control" placeholder="Default input" name="eventTime" value={newEvent.eventTime} onChange={handleInputChange}/>
      </div> */}
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
        // value={newEvent.datetime}
        // onChange={handleInputChange}
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
        onSelect={(result) => {
          const { description, place_id } = result;

          setRows([{ description, place_id }, ...rows]);
        }}
      />
      <br />

      <div
        style={{
          textAlign: "left"
        }}
      >
        {rows.map((row) => (
          <div key={row.place_id} style={{ padding: "8px 0" }}>
            <div style={{ fontSize: 12, color: "#bbb" }}>{row.description}</div>
            {/* <div>
              {row.place_id}&nbsp;
              <CopyToClipboard text={row.place_id}>
                <button>Copy</button>
              </CopyToClipboard>
            </div> */}
          </div>
        ))}
      </div>
      
    </form>
  )
}