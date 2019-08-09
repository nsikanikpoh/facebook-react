import React from 'react';
import CommentSummary from './CommentSummary';
import CreateComment from './CreateComment';
const PostComments = () =>{
  return(
    <div className='post-list section'>
            <CommentSummary />
            <CreateComment />
   </div>
  )
}

export default PostComments;
