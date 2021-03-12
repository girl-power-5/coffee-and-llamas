import React from "react"
import '../App.css';
import { Link, useHistory } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

export default function LoginSideBar(props) {
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.logout(history);
      }

    return (
        <div className="loginsidebar">
            {props.isLoggedIn ? (
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item >
                        <Link to="/dashboard" className="btn btn-link text-secondary">
                            <span className="text-secondary">Dashboard</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Link to="/newevent" className="btn btn-link text-secondary">
                            <span className="text-secondary">Create Event</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Link to="/updateprofile" className="btn btn-link text-secondary">
                            <span className="text-secondary">Update Profile</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Link to="/medical" className="btn btn-link text-secondary">
                            <span className="text-secondary">Medical</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Link to="#" className="btn btn-link text-secondary" onClick={handleSubmit}>
                            <span className="text-secondary">Logout</span>
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            ) : (
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item >
                        <Link to="/" className="btn btn-link text-secondary">
                            <span className="text-secondary">Home</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Link to="/login" className="btn btn-link text-secondary">
                            <span className="text-secondary">Login</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Link to="/register" className="btn btn-link">
                            <span className="text-secondary">Register</span>
                        </Link>
                    </ListGroup.Item>

                </ListGroup>
            )}
        </div>

    )
}