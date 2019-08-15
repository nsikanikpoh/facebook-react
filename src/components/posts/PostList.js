import React from 'react';
import PostSummary from './PostSummary';

const PostList = ({posts}) =>{
  return(
    <>
      {
        posts && posts.map(post => {
          return(
            <span key={post.id}>
              <PostSummary post={post}/>
            </span>
          )
        })
      }

   </>
  )
}

export default PostList;
