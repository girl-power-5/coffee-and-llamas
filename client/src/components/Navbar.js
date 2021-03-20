import React from "react"
import { Link, Route, useHistory } from 'react-router-dom';
import CurrentEvent from './CurrentEvent';
import SafetySquad from './SafetySquad';
import AddMember from './AddMember';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import NewEvent from './NewEvent';

export default function AppNavbar(props) {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.logout(history);
  }
  return (
    
      <div className="col-12" >
        {props.isLoggedIn ? (
          <section className="navbar-section">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand><img src="https://res.cloudinary.com/amber-chiodini/image/upload/c_scale,w_250/v1616261599/imok_logo_jrmkml.png"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>
                    <Link to="/home" className="btn btn-link text-secondary">
                      <span className="text-secondary">Home</span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/newevent" className="btn btn-link text-secondary">
                      <span className="text-secondary">Create Event</span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/safetysquad" className="btn btn-link text-secondary">
                      <span className="text-secondary">Safety Squad</span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/addmember" className="btn btn-link text-secondary">
                      <span className="text-secondary">Add Safety Squad Member</span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="#" className="btn btn-link text-secondary" onClick={handleSubmit}>
                      <span className="text-secondary">Logout</span>
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Navbar>
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
            <Navbar bg="light" expand="lg">
              <Navbar.Brand><img src="https://res.cloudinary.com/amber-chiodini/image/upload/c_scale,w_250/v1616261599/imok_logo_jrmkml.png"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link to="/home">
                    <Link to="/" className="btn btn-link text-secondary">
                      <span className="text-secondary">Home</span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link to="/login">
                    <Link to="/login" className="btn btn-link text-secondary">
                      <span className="text-secondary">Login</span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link to="/register">
                    <Link to="/register" className="btn btn-link text-secondary">
                      <span className="text-secondary">Register</span>
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </section>
        )}
      </div>
  
  )
}