import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const createPost = (newPost) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
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


export const editPost = (newPost) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.patch(`/posts/${newPost.id}`, {post:{id:newPost.id, content:newPost.content, user_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'EDIT_POST', post: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
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


export const deletePost = (id) =>{
  return(dispatch, getState) => {
    const user_uuid = getState().auth.user && getState().auth.user.id
    axios.post('/post_delete/', {post: {id:id, user_id:user_uuid}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'DELETE_POST', post: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'DELETE_POST_ERROR',
              err: res.status
          });
        }
       });
  };
}


export const createComment = (newComment) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
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



export const editComment = (newComment) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.patch(`/comments/${newComment.id}`, {comment: {id:newComment.id, content:newComment.content, post_id:newComment.post_id, user_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'EDIT_COMMENT', comment: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'EDIT_COMMENT_ERROR',
              err: res.status
          });
        }
       });
  };
}


export const deleteComment = (id) =>{
  return(dispatch, getState) => {
    const user_uuid = getState().auth.user && getState().auth.user.id
    axios.post('/comment_delete/', {comment: {id:id, user_id:user_uuid}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'DELETE_COMMENT', comment: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'DELETE_COMMENT_ERROR',
              err: res.status
          });
        }
       });
  };
}


export const getPosts = () =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.post('/post_index', {post:{user_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'GET_POSTS', posts: res.data});
           setTimeout(() => {
                dispatch(getRequests());
              }, 2000)
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

export const getRequests = () =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.post('/request_index', {request:{requestee_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'GET_REQUESTS', request: res.data});
         }
        else{
          dispatch({
              type: 'GET_REQUESTS_ERROR',
              err: res.status
          });
        }
       });
  };
}

export const createRequest = (newLike) =>{
  return(dispatch, getState) => {
    console.log(newLike);
    const id = getState().auth.user && getState().auth.user.id
    axios.post('/requests', {request: {requestee_id:newLike.requestee_id, requester_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'CREATE_REQUEST', request: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'CREATE_REQUEST_ERROR',
              err: res.status
          });
        }
       });
  };
}

export const editRequest = (newComment) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.post('/request_update', {request: {requester_id:newComment.requester_id, requestee_id:id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'EDIT_REQUEST', request: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'EDIT_REQUEST_ERROR',
              err: res.status
          });
        }
       });
  };
}


export const updateProfile = (newProfile) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.patch('/profile', {profile: {user_id:id, location: newProfile.location,
    birthday: newProfile.birthday, bio:newProfile.bio, cover:newProfile.cover,
  avatar:newProfile.avatar, gender:newProfile.gender }}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'EDIT_PROFILE', profile: res.data});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'EDIT_PROFILE_ERROR',
              err: res.status
          });
        }
       });
  };
}


export const getProfile = (user_id) =>{
  return(dispatch, getState) => {
    axios.post('/show_profile', {profile:{user_id:user_id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'GET_PROFILE', profile: res.data});
         }
        else{
          dispatch({
              type: 'GET_PROFILE_ERROR',
              err: res.status
          });
        }
       });
  };
}


export const likePost = (newLike) =>{

  return(dispatch, getState) => {
    console.log(newLike);
    axios.post('/likes', {like: {post_id:newLike.post_id, user_id:newLike.user_id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'CREATE_LIKE', like: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'CREATE_LIKE_ERROR',
              err: res.status
          });
        }
       });
  };
}

export const unlikePost = (newLike) =>{
  return(dispatch, getState) => {
    axios.post('/like_delete', {like: {post_id:newLike.post_id, user_id:newLike.user_id}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'CREATE_UNLIKE', like: res.status});
           setTimeout(() => {
                dispatch(getPosts());
              }, 2000)
         }
        else{
          dispatch({
              type: 'CREATE_UNLIKE_ERROR',
              err: res.status
          });
        }
       });
  };
}

export const getUsers = () =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.post('/users/users_index', {user_id:id}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'GET_USERS', users: res.data});
           setTimeout(() => {
                dispatch(getRequests());
              }, 2000)
         }
        else{
          dispatch({
              type: 'GET_USERS_ERROR',
              err: res.status
          });
        }
       });
  };
}

export const getSearch = (search) =>{
  return(dispatch, getState) => {
    const id = getState().auth.user && getState().auth.user.id
    axios.post('/users/search', {search:search}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'GET_SEARCH', search: res.data});
           setTimeout(() => {
                dispatch(getRequests());
              }, 2000)
         }
        else{
          dispatch({
              type: 'GET_SEARCH_ERROR',
              err: res.status
          });
        }
       });
  };
}
