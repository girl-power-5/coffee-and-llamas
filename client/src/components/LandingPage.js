import Footer from './Footer'
import {Link} from "react-router-dom";

export default function LandingPage() {
  return ( 
    <div>
  <div class="jumbotron">
  <h1 class="display-3">Welcome!</h1>
  <p class="lead">The Future of Safety</p>
  <p class="lead">
  <Link to="/login"><button type="button" class="btn btn-primary mr-2">Login</button></Link>
  <Link to="/register"><button type="button" class="btn btn-primary">Register</button></Link>
  </p>
</div>
      <Footer />
    </div>
  )
}