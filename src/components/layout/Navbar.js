import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) =>{
   const { user } = props
  const links = user.id ? <SignedInLinks user={ user }/> : <SignedOutLinks /> ;
  return(
    <nav className="nav-wrapper blue darken-4">
    <div className="container">
       <Link to='/' className="brand-logo">Facebook</Link>
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
