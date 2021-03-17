import React from "react"
import { Link, Route, useHistory } from 'react-router-dom';
import CurrentEvent from './CurrentEvent';
import SafetySquad from './SafetySquad';
import AddMember from './AddMember';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import NewEvent from './NewEvent';

export default function Navbar(props) {
  let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.logout(history);
    }
  return (
    <header className="navbar App-header" id="nav-container">
    <div className="col-4" >
      {props.isLoggedIn ? (
        <section className="navbar-section">
          <Link to="/home" className="btn btn-link text-secondary">
            <span className="text-secondary">Home</span>
          </Link>
          <Link to="/newevent" className="btn btn-link text-secondary">
            <span className="text-secondary">Create Event</span>
          </Link>
          <Link to="/profile" className="btn btn-link text-secondary">
            <span className="text-secondary">Profile Information</span>
          </Link>
          <Link to="/safetysquad" className="btn btn-link text-secondary">
            <span className="text-secondary">Safety Squad</span>
          </Link>
          <Link to="/addmember" className="btn btn-link text-secondary">
            <span className="text-secondary">Add Safety Squad Member</span>
          </Link>
          <Link to="#" className="btn btn-link text-secondary" onClick={handleSubmit}>
            <span className="text-secondary">Logout</span>
          </Link>
        <Route>
        <Route path="/newevent">
            <NewEvent />
        </Route>
        <Route path="/safetysquad">
            <SafetySquad />
        </Route>
        <Route path="/addmember">
            <AddMember />
        </Route>
    </Route>
    </section>
      ) : (
        <section className="navbar-section">
          <Link to="/" className="btn btn-link text-secondary">
            <span className="text-secondary">Home</span>
          </Link>
          <Link to="/login" className="btn btn-link text-secondary">
            <span className="text-secondary">Login</span>
          </Link>
          <Link to="/register" className="btn btn-link">
            <span className="text-secondary">Register</span>
          </Link>
        </section>
      )}
    </div>
  </header>
  )
}