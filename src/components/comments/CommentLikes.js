import React from 'react';

const CommentLikes = () =>{
  return(
    <>
      <div className="like-comment-buttons">

      <button className="like-button"><i className="material-icons">thumb_up</i> Like</button>
      <button className="comment-button"> <i className="material-icons">comment</i> 4 comments</button>

      </div>


      <p className="liked-by">
        <i style={{color:'color:rgb(66,103,178)'}} className="material-icons">like</i>
        <i className="material-icons">thumb_up</i> <b className="user-name"> <a href='/'>Kleen</a>, <a href='/'>Mercy</a>, <a href='/'>Jerry</a>
        </b>

      </p>
   </>
  )
}

export default CommentLikes;
