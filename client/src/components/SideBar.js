import React from "react"
import '../App.css';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

export default function SideBar(props) {
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
        <Link to="#" className="btn btn-link text-secondary" onClick={props.logout}>
            <span className="text-secondary">Logout</span>
          </Link>
        </ListGroup.Item>
    </ListGroup> 
        </div>
        

    )
}