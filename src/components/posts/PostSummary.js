import React from 'react';
import moment from 'moment';
import Profilepic from '../../images/default.png';
import Postimage from '../../images/postimage.png';
import PostComments from '../comments/PostComments';
import CommentLikes from '../comments/CommentLikes';
import { Link } from 'react-router-dom';


const ProjectSummary = ({post}) => {
  console.log(post);
  return(
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

          <Link to={'/post/' + post.id} key={post.id}>
              <p className="post-content">
                {post.content}
                <br/>
                <a href='/'><img width='100%' height='250' src={Postimage} alt="A Profile Pic"/></a>
              </p>
         </Link>



          <div className='post-list section'>
              <CommentLikes />
              <PostComments comments={post.comments} post_id={post.id}/>
         </div>
     </div>
  )
}

export default ProjectSummary;
