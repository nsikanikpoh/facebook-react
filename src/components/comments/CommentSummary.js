import React from 'react';
import moment from 'moment';
import Profilepic from '../../images/default.png'
import Popup from "reactjs-popup";
import EditComment from './EditComment';
import { Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const CommentSummary = ({comment, deleteComment}) => {
  console.log(comment);
  const trigger = <Link>edit</Link>;
  return(

    <div className="all-comments">
        <Link to={'/profile/' + comment.user_id}><img className="tac-image comment-image" src={Profilepic} alt="A Profile Pic"/></Link>
        <p className="comment">
          <span className="comment-content">
            <b><Link to={'/profile/' + comment.user_id} className="user-name">{comment.user_full_name} </Link>
            </b> {comment.content}
          </span>
            <span className="edit-delete-comment">

              <Modal header="Modal Header" trigger={trigger}>
                  <EditComment comment={comment}/>
              </Modal>

              <Link  onClick={() => { if (window.confirm('Are you sure you wish to delete this comment?')) deleteComment(comment.id) } }>Delete</Link>
            </span>
        </p>
      </div>
  )
}
export default CommentSummary;
