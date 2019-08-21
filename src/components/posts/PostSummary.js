import React from 'react';
import moment from 'moment';
import Profilepic from '../../images/default.png';
import Postimage from '../../images/postimage.png';
import PostComments from '../comments/PostComments';
import CommentLikes from '../comments/CommentLikes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteComment, likePost, unlikePost } from '../../store/actions/postActions';
import { Modal, Button } from 'react-materialize';
import EditPost from './EditPost';

const ProjectSummary = (props) => {
  console.log(props);
  const { post, deletePost, user_id, likePost, unlikePost } = props;

  const delComment = id => {
      post.comments.filter(comment => comment.id !== id);
      props.deleteComment(id);
 }

 const trigger = <Link>Edit Post</Link>;

  return(
      <div className="post">
          <p className="post-header">
              <span>
                  <Link to={'/profile/' + post.user.id}><img className="tac-image" src={Profilepic} alt="A Profile Pic"/> </Link>
                  <Link to={'/profile/' + post.user.id} className="user-name">{post.user.first_name} {post.user.last_name}</Link>
              </span>
              <span className='timestamp'> { moment(post.created_at).calendar() }</span>

              <span className="edit-delete-post">
                <Modal header="Modal Header" trigger={trigger}>
                    <EditPost post={post}/>
                </Modal>
                      <Link onClick={() => { if (window.confirm('Are you sure you wish to delete this post?')) deletePost(post.id) } }>Delete</Link>
              </span>
          </p>

          <Link to={'/post/' + post.id} key={post.id}>
              <p className="post-content">
                {post.content}
                <br/>
                <Link to='/'><img width='100%' height='250' src={Postimage} alt="A Profile Pic"/></Link>
              </p>
         </Link>

          <div className='post-list section'>
              < CommentLikes comments_count={post.comments.length} likes={post.likes} user_id={user_id}
               likePost={likePost} unlikePost={unlikePost} post_id={post.id} />
              < PostComments comments={post.comments} post_id={post.id} deleteComment={delComment} />
         </div>
     </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return{
    deleteComment: (id) => dispatch(deleteComment(id)),
    likePost: (user_id, post_id) => dispatch(likePost(user_id, post_id)),
    unlikePost: (user_id, post_id) => dispatch(unlikePost(user_id, post_id))
  }
}
export default connect(null, mapDispatchToProps)(ProjectSummary);
