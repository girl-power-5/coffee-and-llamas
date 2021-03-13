
import React from 'react';

export default function Dashboard(props) {
  return (
    <React.Fragment>
     {props.isLoggedIn ? (
      <p>Welcome to the protected page {props.username}</p>
    ) : (
      <p>Error: this page is for logged in users only!</p>
    )}
  </React.Fragment>
  )
}