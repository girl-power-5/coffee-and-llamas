import React from "react"
import '../App.css';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

export default function LoginSideBar(props) {
    return (
        <div className="loginsidebar">
        {props.isLoggedIn ? (
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item >
                    <Link to="/" className="btn btn-link text-secondary">
                        <span className="text-secondary">Home</span>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item >
                <Link to="/page" className="btn btn-link text-secondary">
            <span className="text-secondary">protected page</span>
          </Link>
                </ListGroup.Item>
                <ListGroup.Item >
                    <Link to="#" className="btn btn-link text-secondary" onClick={props.logout}>
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