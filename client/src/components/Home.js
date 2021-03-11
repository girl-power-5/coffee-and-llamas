import React from 'react'
import '../App.css';

export default function Home(props) {
  return (
    <p className="guestmessage">Welcome home {props.isLoggedIn ? props.username : 'guest. Try registering an account or logging in!'}</p>
  )
}