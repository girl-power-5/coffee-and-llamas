import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import API from "./utils/API";
import { UserContext } from './UserContext';
import Register from './components/Register';
import Login from './components/Login';
import LoginSideBar from './components/LoginSideBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


function App() {
  const [userStatus, setUserStatus] = useState({
                                        isLoggedIn: false,
                                        username: null,
                                        password: null,
                                      })
  useEffect(() => { 
    API.getData()
      .then(res => console.log('TEST', res))
      .catch(err => console.log(err))
   }, []);
   useEffect(() => {
    getUser();
   }, [])
   const updateUser = (updatedProp, update) => {
    setUserStatus({ ...userStatus, [updatedProp]: update });
  }
   const getUser = () => {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        setUserStatus({
          isLoggedIn: true,
          username: response.data.user.username
        });
      } else {
        setUserStatus({
          isLoggedIn: false,
          username: null
        });
      }
    });
  }
  const register = async () => {
		const { username, password } = userStatus;
		let response = await axios.post('/user/register', { username, password });
		if (response.status === 200) {
			setUserStatus({ isLoggedIn: true });
      // window.history.push("/");
		} else {
			console.log('signup error');
		}
	}
  const login = async () => {
    const { username, password } = userStatus;
    let response = await axios.post('/user/login/', { username, password });
    if (response.status === 200) {
      setUserStatus({ isLoggedIn: true });
      // window.history.push("/");
    } else {
      console.log('login error');
    }
  }
  const logout = () => {
    axios.post('/user/logout').then(response => {
      if (response.status === 200) {
        setUserStatus({
          isLoggedIn: false,
          username: null,
          password: null
        });
        // window.history.push("/");
      }
    }).catch(error => {
      console.log('logout error', error);
    });
  }
  return (
      <Router>
      <div className="App">
        <LoginSideBar isLoggedIn={userStatus.isLoggedIn} logout={logout} />
  
        <Route exact path="/" render={() => <Home isLoggedIn={userStatus.isLoggedIn} username={userStatus.username} />} />
        <Route path="/login" render={() => (
          <Login 
            username={userStatus.username} 
            password={userStatus.password}
            updateUser={updateUser} 
            login={login} 
          />
        )} />
        <Route path="/register" render={() => (
          <Register 
            username={userStatus.username} 
            password={userStatus.password}
            updateUser={updateUser} 
            register={register}
          />
        )} />
        <Route path="/page" render={() => <Dashboard isLoggedIn={userStatus.isLoggedIn} username={userStatus.username} />} />
      </div>
      </Router>
  );
}
export default App;

