import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../UserContext';
import Alert from 'react-bootstrap/Alert';
import Footer from './Footer'

export default function Register(props) {
  let history = useHistory();
  const userContext = useContext(UserContext);
  const [verifiedPW, setverifiedPW] = useState();
  const [isValid, setValid] = useState(false);
  const [classes, setClasses] = useState();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState();
  
  const handleChange = (event) => {
    if (verifiedPW !== userContext.password || !verifiedPW) {
      setClasses("")

    } else {
      setValid(true)
      setClasses("is-valid")
    }
    props.updateUser(event.target.name, event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(userContext.username).toLowerCase().trim()) === false) {
          setShow(true)
          setAlert("Please enter a valid email.")
          return;
        }
    props.register(history);
  }

  const handlePasswordCheck = (e) => {
    setverifiedPW(e.target.value)
  }

  const handleValidate = () => {
    if (verifiedPW !== userContext.password || !verifiedPW) {
      setClasses("")

    } else {
      setValid(true)
      setClasses("is-valid")
    }
  }

  useEffect(() => {
    setValid(false)
    setClasses("")
    handleValidate()
  }, [userContext, verifiedPW, classes])

  return (
    <div style={{margin: "3em 2em"}}>     
      {show ? (      
        <div class="col-lg-5 mt-2">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {alert}
        </Alert>
      </div>
      ) : (
        <></>
      )}
  
    <div className="SignupForm">
      <h4>Register</h4>
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="username">Email: </label>
          </div>
          <div className="col-sm-10 col-lg-5 col-mr-auto">
            <input className="form-control"
              type="text"
              name="username"
              onChange={handleChange}
            />
          </div>
        </div>
    
          <div className="form-group  has-success">
            <div className='col-7 col-ml-auto'>
              <label className="form-label" htmlFor="password">Enter password: </label>
            </div>
            <div className="col-sm-10 col-lg-5 col-mr-auto">
              <input className={`${`form-control ${classes}`}`}
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="col-7 col-ml-auto">
              <label className="form-label" htmlFor="password">Reenter password: </label>
            </div>
            <div className="col-sm-10  col-lg-5 col-mr-auto">
              <input className={`${`form-control ${classes}`}`}
                name="passwordMatch"
                onChange={handlePasswordCheck}
                type="password"
              />
            </div>
          </div>
          <div className="form-group ">
            {isValid
              ? (<button
                className="btn btn-primary col-mr-auto"
                onClick={handleSubmit}
                type="submit"
              >Sign up</button>)
              : (<button
                className="btn btn-primary col-mr-auto disabled"
                type="submit"
              >Sign up</button>)
            }

          </div>
     
    </form>
  </div>
  <Footer />
  </div>
  );
}