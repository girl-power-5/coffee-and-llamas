import React, {useState, useContext} from 'react';
import { UserContext } from '../UserContext';

export default function NewEvent() {
  const context = useContext(UserContext)
  const [newEvent, setNewEvent] = useState({
    id: context.id
  })

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewEvent({...newEvent, [evt.target.name]: value})
    console.log('newEvent', newEvent)
  }

  return (
    <form>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Date of the event:</label>
        <input type="text" class="form-control" placeholder="Default input" name="eventDate" value={newEvent.eventDate} onChange={handleInputChange}/>
      </div>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Time of the event:</label>
        <input type="text" class="form-control" placeholder="Default input" name="eventTime" value={newEvent.eventTime} onChange={handleInputChange}/>
      </div>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Event location:</label>
        <input type="text" class="form-control" placeholder="Default input" name="eventLocation" value={newEvent.eventLocation} onChange={handleInputChange}/>
      </div>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Name of the person:</label>
        <input type="text" class="form-control" placeholder="Default input" name="personName" value={newEvent.personName} onChange={handleInputChange}/>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Link to social media:</label>
        <input type="text" class="form-control" placeholder="Default input" name="socialMedia" value={newEvent.socialMedia} onChange={handleInputChange}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}