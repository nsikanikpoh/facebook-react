import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) =>{
   const { user } = props
  const links = user && user.id ? <SignedInLinks user={ user } request_count={user.requests_count}/> : <SignedOutLinks /> ;
  return(
    <nav className="nav-wrapper blue darken-4">
    <div className="container">
       <Link to='/' className="brand-logo left" style={{position: "block"}} >Facebook</Link>

       {links}

    </div>
   </nav>
  )
}

const mapStateToProps = (state) => {

  return{
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(Navbar);
