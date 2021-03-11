import React from 'react'
export default function Home(props) {
  return (
    <p>Welcome home {props.isLoggedIn ? props.username : 'guest. Try registering an account or logging in!'}</p>
  )
}