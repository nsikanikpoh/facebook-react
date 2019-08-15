const initState = {
  posts:[]
}

const postReducer = (state = initState, action) =>{
  switch(action.type){
    case 'CREATE_POST':
      console.log('POST CREATED', action.post);
      return state;
    case 'CREATE_POST_ERROR':
      console.log('POST CREATED error', action.err);
      return state;
      case 'CREATE_COMMENT':
        console.log('POST CREATED', action.comment);
        return state;
      case 'CREATE_COMMENT_ERROR':
        console.log('POST CREATED error', action.err);
        return state;
      case 'EDIT_POST':
        console.log('POST CREATED', action.post);
        return state;
      case 'EDIT_POST_ERROR':
        console.log('POST CREATED error', action.err);
        return state;
        case 'GET_POSTS':
          console.log('POSTS FETCHED', action.posts);
          return {
            ...state,
            posts: action.posts
          }
        case 'GET_POSTS_ERROR':
          console.log('POSTS FECTCH error', action.err);
          return state;

    default:
      return state;
  }
}

export default postReducer;
