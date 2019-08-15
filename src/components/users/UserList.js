import React from 'react';
import UserSummary from './UserSummary';
import { Link } from 'react-router-dom';


const UserList = () =>{
  return(
    <div className='dashboard container'>
     <div className='row'>


      <div className="col s12 m4 l2">
         <p>Profile and Games</p>
      </div>

      <div className="col s12 m4 l7">
      <div className="users-index">
        <h1>People</h1>

        <div className="all-users">
          <div className="users-grid">

              <UserSummary />
              <UserSummary />
              <UserSummary />
          </div>
        </div>
      </div>
      </div>

      <div className="col s12 m4 l3">
         <p>Advert Section</p>
      </div>
     </div>
   </div>

  )
}






export default UserList;
