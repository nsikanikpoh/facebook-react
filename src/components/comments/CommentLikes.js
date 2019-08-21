import React from 'react';
import { Link } from 'react-router-dom';

const CommentLikes = ({comments_count, likes, user_id, likePost, unlikePost, post_id}) =>{

  const userLike = likes.filter(like => like.user_id == user_id);
  let likeButton = null

   if(userLike.length == 0){
     likeButton =  <button className="like-button" onClick={() => {likePost({user_id:user_id, post_id:post_id})}}><i className="material-icons">thumb_up</i>{likes.length} Likes</button>

   }else {
     likeButton =  <button className="like-button unlike" onClick={() => {unlikePost({user_id:user_id, post_id:post_id})}}><i className="material-icons">thumb_up</i>{likes.length} Likes</button>
   }

  return(
    <>
      <div className="like-comment-buttons">
      {likeButton}

      <button className="comment-button"> <i className="material-icons">comment</i> {comments_count} comments</button>

      </div>

      <p className="liked-by">
        <i style={{color:'color:rgb(66,103,178)'}} className="material-icons">like</i>
        <span style={{width:3, height: 3}}><i className="material-icons">thumb_up</i></span>

        {
          likes && likes.map(like => {
            return(
              <span key={like.id}>
              <b className="user-name"> <Link to={'/profile' + like.full_user.id}>{like.full_user.first_name}</Link>
              </b>
              </span>
            )
          })
        }


      </p>
   </>
  )
}

export default CommentLikes;
