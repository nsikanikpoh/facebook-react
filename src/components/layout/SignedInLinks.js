import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import Profilepic from '../../images/default.png'
import { Redirect } from 'react-router-dom';

const SignedInLinks = (props) =>{
 const {user, request_count} = props;
 const request_link = request_count > 0 ?  <li >
       <a href="/requests">Friend Requests {request_count}</a>
    </li>
 : null
  return(
      <ul className="right">

      <li className="left">

         <form className="search">
               <li style={{position:"relative"}} className="left">
                     <input id="search" type="search" required  name="search" style={{color:'white', width: 95}} placeholder="search" />
                </li>
                <li className="right">
                    <span><NavLink style={{color:'white'}}><i className="material-icons">search</i></NavLink></span>
                </li>
         </form>

       </li>
        <li ><NavLink to='/people'>People</NavLink></li>

        <li className="navbar-tac"> <NavLink to={'/profile/' + user.id} >
        <img className="tac-image" src={Profilepic} alt="A Profile Pic"/>
        {user.first_name}
          </NavLink>
        </li>

        <li >
          <NavLink to='/'>Home</NavLink>
        </li>

        {request_link}

        <li >
          <NavLink to='/'>Edit Profile</NavLink>
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
