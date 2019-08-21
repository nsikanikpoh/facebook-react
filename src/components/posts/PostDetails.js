import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Profilepic from '../../images/default.png';
import Postimage from '../../images/postimage.png';
import PostComments from '../comments/PostComments';
import CommentLikes from '../comments/CommentLikes';
import { Modal, Button } from 'react-materialize';
import EditPost from './EditPost';
import { deletePost, likePost, unlikePost } from '../../store/actions/postActions';
import { Link } from 'react-router-dom';

const PostDetails = (props) => {
  const { singlepost, auth, deletePost, user_id, likePost, unlikePost } = props
  const delPost = id => {
    deletePost(id);
 }

  const post = singlepost[0]
  console.log(post);
  if(!auth) return <Redirect to='/signin'/>
  const trigger = <a>Edit Post</a>;

    return(

      <div className='dashboard container'>
       <div className='row'>

        <div className="col s12 m4 l2">
           <p>Profile and Games</p>
        </div>

        <div className="col s12 m4 l7">
            <div className="post">
              <p className="post-header">
                <span>
                <Link to={'/profile/' + post.user_id}><img className="tac-image" src={Profilepic} alt="A Profile Pic"/> </Link>
                <Link to={'/profile/' + post.user_id} className="user-name">{post.user.first_name} {post.user.last_name}</Link>
              </span>
              <span className='timestamp'> { moment(post.created_at).calendar() }</span>
                  <span className="edit-delete-post">

                  <Modal header="Modal Header" trigger={trigger}>
                      <EditPost post={post}/>
                  </Modal>

                    <a onClick={() => { if (window.confirm('Are you sure you wish to delete this post?')) deletePost(post.id) } }>Delete</a>
                  </span>
              </p>

              <p className="post-content">
                {post.content}
                <br/>
                <img width='100%' height='250' src={Postimage} alt="A Profile Pic"/>
              </p>

              < CommentLikes comments_count={post.comments.length} likes={post.likes} user_id={user_id}
                   likePost={likePost} unlikePost={unlikePost} post_id={post.id}/>
              < PostComments comments={post.comments} post_id={post.id} />

            </div>
        </div>

        <div className="col s12 m4 l3">
           <p>Advert Section</p>
        </div>
       </div>
     </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.post.posts;
  const singlepost = state.post.posts.filter(function (post) {
    return post.id == id
   });

  return{
    singlepost: singlepost,
    auth: state.auth.isAuthenticated,
    user_id: state.auth.user.id
  }
}

const mapDispatchToProps = (dispatch) => {

  return{
    deletePost: (id) => dispatch(deletePost(id)),
    likePost: (user_id, post_id) => dispatch(likePost(user_id, post_id)),
    unlikePost: (user_id, post_id) => dispatch(unlikePost(user_id, post_id))
  }
}

export default connect(mapStateToProps)(PostDetails);
