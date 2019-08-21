const initState = {
  posts:[],
  requests:[],
  users:[],
  search:[],
  profile: null
}

const postReducer = (state = initState, action) =>{
  switch(action.type){
    case 'CREATE_POST':
      console.log('POST CREATED', action.post);
      return state;
    case 'CREATE_POST_ERROR':
      console.log('POST CREATED error', action.err);
      return state;
      case 'EDIT_POST':
        console.log('POST EDITED', action.post);
        return state;
      case 'EDIT_POST_ERROR':
        console.log('POST EDITED error', action.err);
        return state;
      case 'EDIT_PROFILE':
        console.log('PROFILE EDITED', action.profile);
        return {
          ...state,
          profile: action.profile
        }
      case 'EDIT_PROFILE_ERROR':
        console.log('PROFILE EDITED error', action.err);
        return state;
      case 'GET_PROFILE':
        console.log('PROFILE GET', action.profile);
        return {
          ...state,
          profile: action.profile
        }
      case 'GET_PROFILE_ERROR':
        console.log('PROFILE EDITED error', action.err);
        return state;
      case 'DELETE_POST':
          console.log('POST DELETE', action.post);
          return state;
      case 'DELETE_POST_ERROR':
          console.log('POST DELETE error', action.err);
          return state;
      case 'CREATE_LIKE':
        console.log('LIKE CREATED', action.like);
        return state;
      case 'CREATE_LIKE_ERROR':
        console.log('LIKE CREATED error', action.err);
        return state;
      case 'CREATE_REQUEST':
        console.log('REQUEST CREATED', action.request);
        return state;
      case 'CREATE_REQUEST_ERROR':
        console.log('REQUEST CREATED error', action.err);
        return state;
      case 'EDIT_REQUEST':
        console.log('REQUEST EDIT', action.request);
        return state;
      case 'EDIT_REQUEST_ERROR':
        console.log('REQUEST EDITED error', action.err);
        return state;
      case 'CREATE_UNLIKE':
        console.log('UNLIKE CREATED', action.like);
        return state;
      case 'CREATE_UNLIKE_ERROR':
        console.log('UNLIKE CREATED error', action.err);
        return state;
      case 'CREATE_COMMENT':
        console.log('POST CREATED', action.comment);
        return state;
      case 'CREATE_COMMENT_ERROR':
        console.log('POST CREATED error', action.err);
        return state;
        case 'EDIT_COMMENT':
          console.log('COMMENT EDIT', action.comment);
          return state;
        case 'EDIT_COMMENT_ERROR':
          console.log('COMMENT EDITED error', action.err);
          return state;
        case 'DELETE_COMMENT':
          console.log('COMMENT DELETE', action.comment);
          return state;
        case 'DELETE_COMMENT_ERROR':
          console.log('COMMENT DELETE error', action.err);
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
        case 'GET_USERS':
          console.log('USERS FETCHED', action.users);
          return {
            ...state,
            users: action.users
          }
        case 'GET_USERS_ERROR':
          console.log('USERS FECTCH error', action.err);
          return state;
        case 'GET_SEARCH':
          console.log('SEARCH FETCHED', action.search);
          return {
            ...state,
            search: action.search
          }
        case 'GET_SEARCH_ERROR':
          console.log('SEARCH FECTCH error', action.err);
          return state;
        case 'GET_REQUESTS':
          console.log('REQUESTS FETCHED', action.requests);
          return {
            ...state,
            requests: action.requests
          }
        case 'GET_REQUESTS_ERROR':
          console.log('REQUESTS FECTCH error', action.err);
          return state;

    default:
      return state;
  }
}

export default postReducer;
