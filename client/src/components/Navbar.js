import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <header className="navbar App-header" id="nav-container">
    <div className="col-4" >
      {props.isLoggedIn ? (
        <section className="navbar-section">
          <Link to="/dashboard" className="btn btn-link text-secondary">
            <span className="text-secondary">Dashboard</span>
          </Link>
          <Link to="/newevent" className="btn btn-link text-secondary">
            <span className="text-secondary">Create Event</span>
          </Link>
          <Link to="#" className="btn btn-link text-secondary" onClick={props.logout}>
            <span className="text-secondary">Logout</span>
          </Link>
        </section>
      ) : (
        <section className="navbar-section">
          <Link to="/" className="btn btn-link text-secondary">
            <span className="text-secondary">home</span>
          </Link>
          <Link to="/login" className="btn btn-link text-secondary">
            <span className="text-secondary">login</span>
          </Link>
          <Link to="/register" className="btn btn-link">
            <span className="text-secondary">register</span>
          </Link>
        </section>
      )}
    </div>
    <div className="col-4 col-mr-auto">
      <h1 className="App-title">MERN Passport Example</h1>

    </div>
  </header>
  )
}