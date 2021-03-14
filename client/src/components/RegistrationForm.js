import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegistrationForm(props) {
  let history = useHistory();
  const context = useContext(UserContext)

  const [newProfile, setNewProfile] = useState({
    id: context.id
  })

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewProfile({...newProfile, [evt.target.name]: value})
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.onRegistrationSubmit(newProfile, history);
  }

  return (
    <div>
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