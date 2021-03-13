import React from 'react';
import Header from './Header'
import Footer from './Footer'
import CurrentEvent from './CurrentEvent'
import SafetySquad from './SafetySquad'
import SafetySquadActivity from './SafetySquadActivity'
 

export default function Home({userStatus}) {
  console.log('PROPS', userStatus)
  const { isLoggedIn, firstName } = userStatus;
  return (
    <React.Fragment>
     {isLoggedIn ? (
       <div>
    <Header />
    <CurrentEvent />
    <SafetySquad />
    <SafetySquadActivity />

   
   </div>
    ) : (
      <p>Error: this page is for logged in users only!</p>
    )}
  </React.Fragment>
  )
}