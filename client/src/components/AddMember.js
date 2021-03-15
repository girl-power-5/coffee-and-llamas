import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import { HistoryContext } from '../HistoryContext';
import { useHistory } from 'react-router-dom';
import API from '../utils/API';
import { Form, Col, Row, Button } from 'react-bootstrap';

export default function AddMember() {
  let history = useHistory();

  const userContext = useContext(UserContext);
  const historyContext = useContext(HistoryContext);

  const [squadMember, setSquadMember] = useState({
    id: userContext.id,
    memberName: "",
    memberNumber: ""
  })

  const onMemberChange = (e) => {
    let value = e.target.value;
    setSquadMember({...squadMember, [e.target.name]: value})
  }

  const onMemberSubmit = () => {
    API.addMember(squadMember)
    .then(res => console.log('ADD MEMBER', res))
    .catch(err => console.log(err))
    historyContext(history, "/home")
  }

  return (
    <Form>
      <Row>
        <Col
          sm={10}
          lg={5}
          style={{ padding: "1.2em" }}
        >
          <Form.Control 
            placeholder="Member First name"
            name="memberName"
            value={squadMember.memberName}
            onChange={onMemberChange} 
          />
        </Col>
        <Col
          sm={10}
          lg={5}
          style={{ padding: "1.2em" }}
        >
          <Form.Control 
            placeholder="Member Phone Number"
            name="memberNumber"
            value={squadMember.memberNumber}
            onChange={onMemberChange}  
          />
        </Col>
      </Row>
      <Button onClick={onMemberSubmit}>Add member</Button>
    </Form>
  )
}