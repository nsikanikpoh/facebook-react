import React from 'react';
import UserSummary from '../users/UserSummary';
import { Link } from 'react-router-dom';


const Requests = () =>{
  return(
    <div className='dashboard container'>
     <div className='row'>


      <div className="col s12 m4 l2">
         <p>Profile and Games</p>
      </div>

      <div className="col s12 m4 l7">
      <div className="requests-index">
        <h1>Friend Requests</h1>

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






export default Requests;
