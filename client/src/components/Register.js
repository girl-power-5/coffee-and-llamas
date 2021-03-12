import React from "react";
import { useHistory } from "react-router-dom";

export default function Register(props) {
  let history = useHistory();

	const handleChange = (event) => {
    props.updateUser(event.target.name, event.target.value );
  }
  
	const handleSubmit = (event) => {
    event.preventDefault();
    props.register(history);
  }
  return (
    <div className="SignupForm">
    <h4>Register</h4>
    <form className="form-horizontal">
      <div className="form-group">
        <div className="col-1 col-ml-auto">
          <label className="form-label" htmlFor="username">Username: </label>
        </div>
        <div className="col-3 col-mr-auto">
          <input className="form-input"
            type="text"
            name="username"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-1 col-ml-auto">
          <label className="form-label" htmlFor="password">Password: </label>
        </div>
        <div className="col-3 col-mr-auto">
          <input className="form-input"
            placeholder="Choose a password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group ">
        <div className="col-7"></div>
        <button
          className="btn btn-primary col-1 col-mr-auto"
          onClick={handleSubmit}
          type="submit"
        >Sign up</button>
      </div>
    </form>
  </div>
  );
}