import React from 'react';
import Profilepic from '../../images/default.png'


const CommentDetails = () =>{
  return(
    <div className="all-comments">
        <a href='/'><img className="tac-image comment-image" src={Profilepic} alt="A Profile Pic"/></a>
        <p className="comment">
          <span className="comment-content">
            <b><a href='/' className="user-name">Mark Joe </a></b> yeah thats really true, you are on point.
          </span>
            <span className="edit-delete-comment">
              <a href='/'>Edit</a>
              <a href='/'>Delete</a>
            </span>
        </p>
      </div>
  )
}

export default CommentDetails;
