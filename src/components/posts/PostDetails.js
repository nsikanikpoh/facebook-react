import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Profilepic from '../../images/default.png';
import Postimage from '../../images/postimage.png';
import PostComments from '../comments/PostComments';


const PostDetails = (props) => {
  const { singlepost, auth } = props
  const post = singlepost[0]
  console.log(post);
  if(!auth) return <Redirect to='/signin'/>

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
                <a href='/'><img className="tac-image" src={Profilepic} alt="A Profile Pic"/> </a>
                <a href="#" className="user-name">{post.user.first_name} {post.user.last_name}</a>
              </span>
              <span className='timestamp'> { moment(post.created_at).calendar() }</span>
                  <span className="edit-delete-post">
                    <a href="/">Edit Post</a>
                    <a href="/">Delete</a>
                  </span>
              </p>

              <p className="post-content">
                {post.content}
                <br/>
                <a href='/'><img width='100%' height='250' src={Postimage} alt="A Profile Pic"/></a>
              </p>

             <PostComments comments={post.comments} post_id={post.id}/>

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
    auth: state.auth.isAuthenticated
  }
}
export default connect(mapStateToProps)(PostDetails);
