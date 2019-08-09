import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const signIn = (credentials) => {
  return(dispatch, getState) => {
    axios.post('/sessions', {email:credentials.email,
    password:credentials.password}).then((res) => {
            if(res.status == 201){
              console.log(res);
               localStorage.setItem('jwtToken', res.data.token);
               console.log(res.data.token)
               console.log(res.data.user)
               dispatch({type: 'SET_CURRENT_USER', payload: res.data.user});
            }
            else{

              dispatch({type: 'LOGIN_ERROR', err: res.status})
            }
    });
  }
}

export const setCurrentUser = (dispatch, getState, user) => {

  dispatch({type: 'SET_CURRENT_USER', payload: user})

}


export const signOut = (dispatch, getState) => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(setCurrentUser({}));
    getState().history.push('/login');
}

export const signUp = (newUser) =>{
  return(dispatch, getState) => {
    axios.post('/registration', {user:{email:newUser.email,
      password:newUser.password, first_name: newUser.first_name,
      last_name:newUser.last_name}}).then((res) =>{
         if(res.status == 200){
           console.log(res);
           dispatch({type: 'SIGNUP_SUCCESS'});
           console.log(getState());
         }
        else{
          dispatch({
              type: 'SIGNUP_ERROR',
              err: res.status
          });
        }


       });
  };

}
