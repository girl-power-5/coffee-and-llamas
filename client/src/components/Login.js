import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
  const handleChange = (event) => {
    props.updateUser(event.target.name, event.target.value );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login();
  }
  if (props.redirectTo) {
    return <Redirect to={{ pathname: props.redirectTo }} />
  } else {
      return (
        <React.Fragment>
          <h4>Login</h4>
          <form className="form-horizontal">
            <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">Username: </label>
            </div>
            <div className="col-3 col-mr-auto">
                <input className="form-input"
                  type="text"
                  name="username"
                  placeholder="Username"
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
                  placeholder="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7"></div>
              <button className="btn btn-primary col-1 col-mr-auto" onClick={handleSubmit} type="submit">Login</button>
            </div>
          </form>
      </React.Fragment>
    )
  }
}