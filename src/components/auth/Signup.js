import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    first_name:'',
    last_name:''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  }

  render(){
    const { auth, authError, message} = this.props
    if(auth) return <Redirect to='/'/>

    return(

      <div className='container'>
       <div className='row'>
         <div className='col s12 m6'>
         <div className="external-login">
           <h1 className="regist-header">Facebook Inc.</h1>
           <p className="regist-free">Already have an account ? <br/> Click to sign in with one of the following: </p>
           <div className="signin-links">

           </div>

           </div>
         </div>
         <div className='col s12 m5 offset-md1'>
         <p className="regist-free">Create a New Account.</p>
         <br/>
       <form onSubmit={this.handleSubmit} className="normal white">

       <div className='input-field email-regist'>
         <input type="email" id="email" placeholder="Email" autofocus="true" onChange={this.handleChange}/>
       </div>

         <div className='input-field field firstname-regist'>

           <input type="text" id="first_name" placeholder="First Name" onChange={this.handleChange}/>
         </div>

         <div className='input-field field lastname-regist'>

           <input type="text" id="last_name" placeholder="Last Name" onChange={this.handleChange}/>
         </div>

         <div className='input-field field password-regist'>
           <input type="password" id="password"  placeholder="Password" onChange={this.handleChange}/>
         </div>

         { message ? <h3 className='green-text input-field'>{message}</h3> : null }
        <p className="input-field conditions"> By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time. </p>

         <div className='input-field actions registration-button'>
           <button className="btn blue darken-4 z-depth-0 lighten-1">Sign Up</button>

         </div>

           <div className='red-text input-field'>
                { authError ? <p>{authError}</p> : null }
           </div>


       </form>
         </div >
       </div>
     </div>



    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    auth: state.auth.isAuthenticated,
    authError: state.auth.authError,
    message: state.auth.message,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
