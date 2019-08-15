import React from 'react';
import moment from 'moment';
import Profilepic from '../../images/default.png'

const CommentSummary = ({comment}) => {
  console.log(comment);
  return(

    <div className="all-comments">
        <a href='/'><img className="tac-image comment-image" src={Profilepic} alt="A Profile Pic"/></a>
        <p className="comment">
          <span className="comment-content">
            <b><a href='/' className="user-name">{comment.user_id} </a>
            </b> {comment.content}
          </span>
            <span className="edit-delete-comment">
              <a href='/'>Edit</a>
              <a href='/'>Delete</a>
            </span>
        </p>
      </div>
  )
}
export default CommentSummary;
