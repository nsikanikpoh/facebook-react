import React from 'react';
import moment from 'moment';
import Profilepic from '../../images/default.png';
import PostComments from '../comments/PostComments';
import { Link } from 'react-router-dom';

const UserSummary = ({user, request, editRequest, createRequest}) => {
  const actionButton = user.friend_request_ids && user.friend_request_ids.includes(request.id) ?
  <Link
   onClick={() => {editRequest({requester_id:request.id})}}
  ><i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>person_add</i>Confirm Request</Link>
  : null

  const actionButtonAdd = user.friend_request_ids && user.friend_request_ids.includes(request.id)  ||
  user.friends_ids && user.friends_ids.includes(request.id) ||
  user.sent_request_ids &&  user.sent_request_ids.includes(request.id) ? null :
  <Link onClick={() => {createRequest({requestee_id:request.id})}}
  > <i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>person_add</i> Add friends</Link>

const sentText = user.sent_request_ids &&  user.sent_request_ids.includes(request.id) ?
<Link
>Request Sent</Link>
: null
  return(
          <div className="users-index-user">
               <Link to={'/profile/' + user.id}>
               <img size='100x100' src={Profilepic} alt="A Profile Pic"/>
               <p className="friend-name">
                 {user.first_name} {user.last_name}
               </p>
              </Link>
                 {actionButton}
                 {actionButtonAdd}
                 {sentText}
          </div>

  )
}


export default UserSummary;
