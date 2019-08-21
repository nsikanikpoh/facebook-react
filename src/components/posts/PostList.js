import React from 'react';
import PostSummary from './PostSummary';

const PostList = ({posts, deletePost, user_id}) =>{


  return(
    <>
      {
        posts && posts.map(post => {
          return(
            <span key={post.id}>
              <PostSummary post={post} deletePost={deletePost} user_id={user_id}/>
            </span>
          )
        })
      }

   </>
  )
}

export default PostList;
