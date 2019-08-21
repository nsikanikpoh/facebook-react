import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profilepic from '../../images/default.png';
import { connect } from 'react-redux';
import { updateProfile } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class ProfileEdit extends Component{

  state = {
    bio:'',
    location:'',
    cover:'',
    avatar:'',
    birthday:'',
    gender:''
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.updateProfile(this.state);
    this.props.history.push('/profile');
  }


  render(){
    const { auth, user } = this.props;
    if(!auth) return <Redirect to='/signin'/>
  return(
    <div className='dashboard container'>
     <div className='row'>

          <div className="cover-background">
          <div className="user-image">
            <img size='100x100' src={Profilepic} alt="A Profile Pic"/>
          </div>

          <div className="cover-content">
            <p style={{color:'white'}}>
               {user.first_name} {user.last_name}
            </p>
          </div>
          </div>

          <div className="user-info-left profile-edit">
            <form className="normal white">
                <label className='photo-label avatar-label'><i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>mode_edit</i> Change Avatar</label>
                  <input type="file" id="avatar" className="post-photo profile-photo-select" onChange={this.fileChangedHandler}/>

                  <label className='photo-label cover-photo-label'><i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>mode_edit</i> Change Cover Photo</label>
                  <input type="file" id="cover" className="post-photo cover-photo-select" onChange={this.fileChangedHandler}/>

                 <div className='input-field'>
                  <input type="date" placeholder=" Birthday" id="birthday" />
                  </div>
                   <div className='input-field'>
                  <input type="text" placeholder="  Gender"id="gender"/>
                  </div>

                   <div className='input-field'>
                  <input type="text" id="location" placeholder="City"/>
                  </div>

                   <div className='input-field'>
                  <textarea cols="30"  rows="30"  placeholder="  About me" id="bio"></textarea>
                  </div>
                  <button className="btn profile-edit-submit-button" style={{width:'100%'}}>Save Your Profile</button>
            </form>

          </div>
     </div>
   </div>

  )
 }
}

const mapStateToProps = (state) => {
  return{
    auth: state.auth.isAuthenticated,
    user: state.auth.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    updateProfile: (cred) => dispatch(updateProfile(cred))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
