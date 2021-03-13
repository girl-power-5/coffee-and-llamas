 
import Header from './Header'
import Footer from './Footer'
import CurrentEvent from './CurrentEvent'
import SafetySquad from './SafetySquad'
import SafetySquadActivity from './SafetySquadActivity'
 

export default function Home(props) {
  return ( 
    <div>
    <Header />
    <CurrentEvent />
    <SafetySquad />
    <SafetySquadActivity />

   <Footer />

    </div>
    
  )
}





/*

<p className="guestmessage">Welcome home {props.isLoggedIn ? props.username : 'guest. Try registering an account or logging in!'}</p>
*/ 