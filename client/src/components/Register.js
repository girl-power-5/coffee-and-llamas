import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../UserContext';

export default function Register(props) {
  let history = useHistory();
  const userContext = useContext(UserContext);
  const [verifiedPW, setverifiedPW] = useState()
  const [isValid, setValid] = useState(false)
  const [classes, setClasses] = useState()
  
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
    console.log('VERIFIED PW', verifiedPW)
    console.log('VALID?', isValid)
    console.log('USERPW', userContext.password)
  }, [verifiedPW, classes])

  return (

    <div className="SignupForm">
      <h4>Register</h4>
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="username">Username: </label>
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
            <div className={`${`col-5 col-ml-auto`}`}>
              <label className="form-label" htmlFor="password">Enter password: </label>
            </div>
            <div className="col-sm-10 col-lg-5 col-mr-auto">
              <input className={`${`form-control ${classes}`}`}
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="col-6 col-ml-auto">
              <label className="form-label" htmlFor="password">Reenter password: </label>
            </div>
            <div className="col-sm-10  col-lg-5 col-mr-auto">
              <input className={`${`form-control ${classes}`}`}
                name="passwordMatch"
                onChange={handlePasswordCheck}
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
  );
}