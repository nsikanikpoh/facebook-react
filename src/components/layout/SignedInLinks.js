import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import Profilepic from '../../images/default.png'
import { Redirect } from 'react-router-dom';

const SignedInLinks = (props) =>{

  return(
      <ul className="right">

      <li className="left">

         <form className="search">
               <li className="left">
                     <input id="search" type="search" required  name="search" style={{color:'white'}} placeholder="search people" />

                </li>
                <li className="right">

                    <span><a style={{color:'white'}}><i className="material-icons">search</i></a></span>
                </li>
         </form>

       </li>
        <li ><NavLink to='/people'>People</NavLink></li>
        <li className="navbar-tac"> <img className="tac-image" src={Profilepic} alt="A Profile Pic"/></li>
        <li >
          <NavLink to='/'>{props.first_name}</NavLink>
        </li>
        <li >
          <NavLink to='/'>Home</NavLink>
        </li>

        <li >
          <a href="/requests">Friend Requests</a>
        </li>

        <li >
          <NavLink to='/'>Edit Account</NavLink>
        </li>
     <li><a onClick={props.signOut}>Log Out</a></li>
     </ul>

  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);
