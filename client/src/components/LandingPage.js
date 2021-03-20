import Footer from './Footer'
import {Link} from "react-router-dom";

export default function LandingPage() {
  return ( 
    <div>
  <div class="jumbotron">
  <p class="lead" style={{fontWeight: "bold"}}>The Future of Safety</p>
  <p class="lead">
  <Link to="/login"><button type="button" class="btn btn-primary mr-2">Login</button></Link>
  <Link to="/register"><button type="button" class="btn btn-primary">Register</button></Link>
  </p>
</div>
      <Footer />
    </div>
  )
}