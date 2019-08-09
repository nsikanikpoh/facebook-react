import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';


const PostList = ({posts}) =>{
  return(
    <>
      {
        posts && posts.map(post => {
          return(
            <Link to={'/' + post.id} key={post.id}>
              <PostSummary post={post}/>
            </Link>
          )
        })
      }

   </>
  )
}

export default PostList;
