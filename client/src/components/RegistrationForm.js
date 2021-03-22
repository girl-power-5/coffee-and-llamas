import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { AlertContext } from 'twilio/lib/rest/monitor/v1/alert';

export default function RegistrationForm(props) {
  let history = useHistory();
  const context = useContext(UserContext)
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState();
  const [newProfile, setNewProfile] = useState({
    id: context.id
  })

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewProfile({...newProfile, [evt.target.name]: value})
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (!newProfile.firstName || !newProfile.lastName || !newProfile.phoneNumber || !newProfile.safetySquad || !newProfile.safetyNumber) {
      setShow(true)
      setAlert("Please complete all fields.")
      return;
    }

    // const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    //     if (re.test(String(newProfile.phoneNumber).toLowerCase()) === false || re.test(String(newProfile.safetyNumber).toLowerCase()) === false) {
    //       setShow(true)
    //       setAlert("Please use a valid US phone number.")
    //       return;
    //     }

    props.onRegistrationSubmit(newProfile, history);
  }

  return (
    <div>
      {show ? (
        <div class="col-lg-5 mt-2">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {alert}
        </Alert>
      </div>
      ) : (
        <></>
      )}
      <Form onChange={handleInputChange}>
        <Form.Group controlId="formfirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" placeholder="Enter first name" name="firstName" value={newProfile.firstName} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formlastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" placeholder="Enter last name" name="lastName" value={newProfile.lastName} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formphoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phoneNumber" placeholder="Enter phone number" name="phoneNumber" value={newProfile.phoneNumber} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formsafetySquad">
          <Form.Label>Safety Squad Member</Form.Label>
          <Form.Control type="safetySquad" placeholder="Enter first name" name="safetySquad" value={newProfile.safetySquad} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formsafetyNumber">
          <Form.Label>Safety Squad Phone Number</Form.Label>
          <Form.Control type="safetyNumber" placeholder="Enter phone number" name="safetyNumber" value={newProfile.safetyNumber} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Register
      </Button>
      </Form>
    </div>
  )
}