import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const createPost = (newPost) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user.id
    axios.post('/posts', {post:{content:newPost.content, user_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'CREATE_POST', post: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'CREATE_POST_ERROR',
              err: res.status
          });
        }

       });
  };

}

export const createComment = (newComment) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user.id
    axios.post('/comments', {comment: {content:newComment.content, post_id:newComment.post_id, user_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'CREATE_COMMENT', comment: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'CREATE_COMMENT_ERROR',
              err: res.status
          });
        }

       });
  };

}



export const editPost = (newPost) =>{
  return(dispatch, getState) => {
    axios.put('/posts', {post:{content:newPost.content}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'EDIT_POST', post: res.data});
         }
        else{
          dispatch({
              type: 'EDIT_POST_ERROR',
              err: res.status
          });
        }


       });
  };

}


export const getPosts = () =>{
  return(dispatch, getState) => {
    const id = getState().auth.user.id
    axios.post('/post_index', {post:{user_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'GET_POSTS', posts: res.data});
         }
        else{
          dispatch({
              type: 'GET_POSTS_ERROR',
              err: res.status
          });
        }


       });
  };

}
