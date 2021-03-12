import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'

export default function RegistrationForm(props) {
  const context = useContext(UserContext)

  const [newProfile, setNewProfile] = useState({
    id: context.id
  })

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setNewProfile({...newProfile, [evt.target.name]: value})
  }

  const onRegistrationSubmit = (evt) => {
    evt.preventDefault();
    API.handleRegistration(newProfile)
    .then(res => console.log('REG RES', res))
    .catch(err => console.log(err));
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
        {/* <Form.Group controlId="formfirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" placeholder="Enter first name" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit" onClick={onRegistrationSubmit}>
          Register
      </Button>
      </Form>
    </div>
  )
}