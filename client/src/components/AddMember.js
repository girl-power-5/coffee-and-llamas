import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { HistoryContext } from "../HistoryContext";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import { Form, Col, Row, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function AddMember() {
  let history = useHistory();

  const userContext = useContext(UserContext);
  const historyContext = useContext(HistoryContext);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState();
  const [squadMember, setSquadMember] = useState({
    id: userContext.id,
    memberName: "",
    memberNumber: "",
  });

  const onMemberChange = (e) => {
    let value = e.target.value;
    setSquadMember({ ...squadMember, [e.target.name]: value });
  };

  const onMemberSubmit = (e) => {
    e.preventDefault();

    if (!squadMember.memberName || !squadMember.memberNumber) {
      setShow(true);
      setAlert("Please enter a name and phone number.");
      return;
    }

    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (re.test(String(squadMember.memberNumber).toLowerCase()) === false) {
      setShow(true);
      setAlert("Please use a valid US phone number.");
      return;
    }

    API.addMember(squadMember)
      .then((res) => console.log("ADD MEMBER", res))
      .catch((err) => console.log(err));
    historyContext(history, "/home");
  };

  return (
    <Form>
      {show ? (
        <div class="col-lg-5 mt-2">
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            {alert}
          </Alert>
        </div>
      ) : (
        <></>
      )}
      <Row>
        <Col sm={10} lg={5} style={{ padding: "1.2em" }}>
          <Form.Control
            placeholder="Member First name"
            name="memberName"
            value={squadMember.memberName}
            onChange={onMemberChange}
          />
        </Col>
        <Col sm={10} lg={5} style={{ padding: "1.2em" }}>
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
  );
}
