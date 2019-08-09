import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Profilepic from '../../images/default.png';
import Postimage from '../../images/postimage.png';
import PostComments from '../comments/PostComments';


const PostDetails = (props) => {
  const { post, auth } = props
  if(!auth) return <Redirect to='/signin'/>

    return(
      <div className="post">
        <p className="post-header">
          <span>
          <a href='/'><img className="tac-image" src={Profilepic} alt="A Profile Pic"/> </a>
          <a href="#" className="user-name">Sly</a>
        </span>
        <span className='timestamp'>{ moment(post.created_at.toDate()).calendar() }</span>

            <span class="edit-delete-post">
              <a href="/">Edit Post</a>
              <a href="/">Delete</a>
            </span>
        </p>

        <p class="post-content">
          {post.content}<br/>
          <a href='/'><img width='100%' height='250' src={Postimage} alt="A Profile Pic"/></a>
        </p>

       < PostComments />

      </div>
    )

}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.post.posts;
  const post = posts ? posts[id] : null
  return{
    post: post,
    auth: state.auth.isAuthenticated
  }
}
export default connect(mapStateToProps)(PostDetails);
