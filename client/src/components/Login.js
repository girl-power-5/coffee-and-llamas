import React from 'react';
import Footer from './Footer'
import { 
  Redirect, 
  useHistory 
  } from 'react-router-dom';
  import { UserContext } from '../UserContext';

export default function Login(props) {
  let history = useHistory();

  const handleChange = (event) => {
    props.updateUser(event.target.name, event.target.value );
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(history);
  }

  if (props.redirectTo) {
    return <Redirect to={{ pathname: props.redirectTo }} />
  } else {
      return (
        <React.Fragment>
          <div style={{margin: "3em 2em"}}>
          <h4>Login</h4>
          <form className="form-horizontal">
            <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">Email: </label>
            </div>
            <div className="col-sm-10 col-lg-3 col-mr-auto">
                <input className="form-control"
                  type="text"
                  name="username"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Password: </label>
              </div>
              <div className="col-sm-10 col-lg-3 col-mr-auto">
                <input className="form-control"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-7"></div>
              <button className="btn btn-primary col-mr-auto" onClick={handleSubmit} type="submit">Login</button>
            </div>
          </form>
          <Footer />
          </div>
      </React.Fragment>
    )
  }
}