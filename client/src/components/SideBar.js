import React from "react"
import '../App.css';
import { Link, useHistory } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

export default function SideBar(props) {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.logout(history);
  }

    return (
        <div className="sidebar">
        <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item >
        <Link to="/" className="btn btn-link text-secondary">
            <span className="text-secondary">Home</span>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action href="#link1">Profile</ListGroup.Item>
        <ListGroup.Item action href="#link1">Create Event</ListGroup.Item>
        <ListGroup.Item >
        <Link to="#" className="btn btn-link text-secondary" onClick={handleSubmit}>
            <span className="text-secondary">Logout</span>
          </Link>
        </ListGroup.Item>
    </ListGroup> 
        </div>
        

    )
}