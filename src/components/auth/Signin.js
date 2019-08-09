import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
  this.props.signIn(this.state);
  }

  render(){
    const { authError, auth, message} = this.props
     if(auth) return <Redirect to='/'/>
    return(

      <div className='container'>
       <div className='row'>
         <div className='col s12 m6'>

         <div className="external-login">
           <h1 className="regist-header">Facebook Inc.</h1>
           <p className="regist-free">Click to sign in with one of the following: </p>
           <div className="signin-links">

           </div>

           </div>
         </div>
         <div className='col s12 m5 offset-md1'>
         <h1 className="regist-header">Log in</h1>
           <br/>
         <form onSubmit={this.handleSubmit} className="normal white">

           <div className='input-field email-regist'>
             <input type="email" id="email" placeholder="Email" autofocus="true" onChange={this.handleChange}/>
           </div>

           <div className='input-field password-regist'>
             <input type="password" id="password"  placeholder="Password" onChange={this.handleChange}/>
           </div>


         <div className='input-field'>
             <button className="btn blue darken-4 z-depth-0 lighten-1">Login</button>
           </div>

           <div className='red-text input-field'>
                   { authError ? <p>{authError}</p> : null }
           </div>
           <div className='green-text input-field'>
                { message ? <p>{message}</p> : null }
           </div>
         </form>
         </div>
       </div>
     </div>



    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return{
    authError: state.auth.authError,
    auth: state.auth.isAuthenticated,
    message: state.auth.message
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signIn: (cred) => dispatch(signIn(cred))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
