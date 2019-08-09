import isEmpty from '../../validation/is-empty';


const initState = {
  authError: null,
  isAuthenticated: false,
  user: {},
  message: null
}

const authReducer = (state = initState, action) =>{
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('Login error')
      return{
        ...state,
        authError: action.err
      }
      case 'SET_CURRENT_USER':
      console.log('SET_CURRENT_USER auth reducer')
          return {
              ...state,
              isAuthenticated: !isEmpty(action.payload),
              user: action.payload
          }
      case 'SIGNUP_SUCCESS':
          console.log('SIGNUP Success')
          return{
            ...state,
            authError: null,
            message: "Your Registration is Successful! Please Sign in"
        }
      case 'SIGNUP_ERROR':
            console.log('Signup error')
            if( action.err){
              return{
                ...state,
                authError: action.err
            }
            return{
              ...state,
              authError: "User Already Exist"
            }

        }

      default:
        return state
  }
}

export default authReducer;
