import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Route,
  useHistory
  } from 'react-router-dom';
import './App.css';
import { UserContext } from './UserContext';
import { HistoryContext } from './HistoryContext';
import { DataContext } from './DataContext';
import Register from './components/Register';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import EventDetails from './components/EventDetails';
import API from './utils/API';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import SafetySquad from './components/SafetySquad';
import Navbar from './components/Navbar';

function App() {
  let history = useHistory();

  const [userStatus, setUserStatus] = useState({
    isLoggedIn: false,
    username: null,
    password: null,
    id: null,
    firstName: null
  })


  const [userData, setUserData] = useState({})

  useEffect(() => {
    getUser();
  } , [])


   useEffect( async () => {
     API.getUserData(userStatus.id)
       .then(res => setUserData(res.data))
       .catch(err => console.log(err))
   }, [userStatus])

   const updateUser = (updatedProp, update) => {
    setUserStatus({ ...userStatus, [updatedProp]: update });
    } 

   const getUser = () => {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        setUserStatus({
          isLoggedIn: true,
          username: response.data.username,
          id: response.data._id,
          firstName: response.data.first_name
        });
      } else {
        setUserStatus({
          isLoggedIn: false,
          username: null,
          id: null,
          firstName: null
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
    .then(response => (
      setUserStatus({
        ...userStatus, 
        isLoggedIn: true, 
        username: response.data.username, 
        id: response.data.id,
        firstName: response.data.first_name
      }))
      )
    .catch(err => console.log(err));
    history.push('./home')
  }

  const login = async (history) => {
    const { username, password } = userStatus;
    let response = await axios.post('/user/login/', { username, password });
    if (response.status === 200) {
      setUserStatus({ 
        isLoggedIn: true, 
        username: response.data.username,
        id: response.data._id,
        firstName: response.data.first_name 
      });
      history.push("/home");
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
          id: null,
          firstName: null
        });
        history.push("/");
      }
    }).catch(error => {
      console.log('logout error', error);
    });
  }

  const updateHistory = (history, path) => {
    history.push(path)
  }

  return (
    <UserContext.Provider value={userStatus}> 
    <HistoryContext.Provider value={updateHistory}>     
    <DataContext.Provider value={userData}>     
      <Router>
      <div className="App">
        <Navbar 
          isLoggedIn={userStatus.isLoggedIn} 
          logout={logout} 
        />
        <Route exact path="/" render={() => 
          <LandingPage 
            isLoggedIn={userStatus.isLoggedIn} 
            username={userStatus.username} 
          />} 
        />
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
        <Route path="/home" render={() => 
          <Home 
            userStatus={userStatus}
            logout={logout}
            getUser={getUser}
            SafetySquad={SafetySquad}
          />} 
        />
        <Route path="/eventdetails/:eventId" render={() => 
          <EventDetails />} 
        />
      </div>
      </Router>
      </DataContext.Provider>
      </HistoryContext.Provider>
      </UserContext.Provider>
  );
}

export default App;