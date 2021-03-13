import React from 'react';

export default function Dashboard({userStatus}) {
  console.log('PROPS', userStatus)
  const { isLoggedIn, firstName } = userStatus;
  return (
    <React.Fragment>
     {isLoggedIn ? (
      <p>Welcome to the protected page {firstName}</p>
    ) : (
      <p>Error: this page is for logged in users only!</p>
    )}
  </React.Fragment>
  )
}