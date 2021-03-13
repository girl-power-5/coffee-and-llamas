import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Route,
  useHistory
  } from 'react-router-dom';
import './App.css';
import { UserContext } from './UserContext';
import Register from './components/Register';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import LoginSideBar from './components/LoginSideBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import API from './utils/API';

function App() {
  let history = useHistory();

  const [userStatus, setUserStatus] = useState({
                                        isLoggedIn: false,
                                        username: null,
                                        password: null,
                                        id: null,
                                        firstName: null
                                      })

   useEffect(() => {
    getUser();
    console.log(userStatus)
   }, [])

   const updateUser = (updatedProp, update) => {
    setUserStatus({ ...userStatus, [updatedProp]: update });
    } 

   const getUser = () => {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        setUserStatus({
          isLoggedIn: true,
          username: response.data.username,
          id: response.data._id
        });
      } else {
        setUserStatus({
          isLoggedIn: false,
          username: null,
          id: null
        });
      }
    });
  }

  const register = async (history) => {
		const { username, password } = userStatus;
		let response = await axios.post('/user/register', { username, password });
		if (response.status === 200) {
			setUserStatus({...userStatus, isLoggedIn: true, username: response.data.username, id: response.data._id });
      history.push("/registrationform");
		} else {
			console.log('signup error');
		}
	}

  const onRegistrationSubmit = async (newProfile, history) => {
    
    API.handleRegistration(newProfile)
    .then(response => 
      setUserStatus({
        ...userStatus, 
        isLoggedIn: true, 
        username: response.data.username, 
        id: response.data.id,
        firstName: response.data.first_name
      }))
    .catch(err => console.log(err));
    history.push('./dashboard')
  }

  const login = async (history) => {
    const { username, password } = userStatus;
    let response = await axios.post('/user/login/', { username, password });
    if (response.status === 200) {
      setUserStatus({ 
        isLoggedIn: true, 
        username: response.data.username,
        id: response.data._id 
      });
      history.push("/dashboard");
    } else {
      console.log('login error');
    }
  }

  const logout = (history) => {
    axios.post('/user/logout').then(response => {
      if (response.status === 200) {
        setUserStatus({
          isLoggedIn: false,
          username: null,
          password: null,
          id: null
        });
        history.push("/");
      }
    }).catch(error => {
      console.log('logout error', error);
    });
  }

  return (
    <UserContext.Provider value={userStatus}>     
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
        <Route path="/registrationform" render={() => 
        <RegistrationForm 
          isLoggedIn={userStatus.isLoggedIn} 
          username={userStatus.username} 
          history={history} 
          onRegistrationSubmit={onRegistrationSubmit}
          />} 
        />
        <Route path="/dashboard" render={() => <Dashboard 
          userStatus={userStatus}
          />} 
        />
        <Route path="/home" render={() => 
          <Home 
            isLoggedIn={userStatus.isLoggedIn} 
            username={userStatus.username} 
            />} 
        />
      </div>
      </Router>
      </UserContext.Provider>
  );
}

export default App;