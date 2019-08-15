import React from 'react';
import moment from 'moment';
import Profilepic from '../../images/default.png';
import PostComments from '../comments/PostComments';

const UserSummary = () => {
  return(
          <div className="users-index-user">
               <a href='/'><img size='100x100' src={Profilepic} alt="A Profile Pic"/> </a>
               <p className="friend-name">
                 Harbbert Mali
               </p>
                 <a href="/" className="add-friend-button users-index-button accept-color">Confirm Request</a>
                 <a href="/" className="add-friend-button users-index-button"> <i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>person_add</i> Add friends</a>
          </div>

  )
}


export default UserSummary;
