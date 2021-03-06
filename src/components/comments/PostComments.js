import React from 'react';
import CommentSummary from './CommentSummary';
import CreateComment from './CreateComment';

const PostComments = ({comments, post_id, deleteComment}) =>{

  return(
    <>

            {
              comments && comments.map(comment => {
                return(
                  <span key={comment.id}>
                    <CommentSummary comment={comment} deleteComment={deleteComment}/>
                  </span>
                )
              })
            }
            <CreateComment post_id={post_id}/>
   </>
  )
}

export default PostComments;
