import React from 'react';
import moment from 'moment';
import CommentLikes from './CommentLikes';
import CommentDetails from './CommentDetails';

const CommentSummary = () => {
  return(
    <>
     <CommentLikes />
     <CommentDetails />
     <CommentDetails />
     <CommentDetails />
    </>
  )
}
export default CommentSummary;
