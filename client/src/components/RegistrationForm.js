import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function RegistrationForm() {
  return (
    <div>
      <Form>
        <Form.Group controlId="formfirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" placeholder="Enter first name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formlastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" placeholder="Enter last name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone number" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formsafetySquad">
          <Form.Label>Safety Squad Member</Form.Label>
          <Form.Control type="safetySquad" placeholder="Enter first name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formsafetyNumber">
          <Form.Label>Safety Squad Phone Number</Form.Label>
          <Form.Control type="safetyNumber" placeholder="Enter phone number" />
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
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </div>
  )
}