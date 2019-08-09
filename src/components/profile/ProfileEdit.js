import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profilepic from '../../images/default.png';

class ProfileEdit extends Component{

  state = {
    content: ''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
    //this.props.createProject(this.state);
    //this.props.history.push('/');
  }


  render(){
  return(
    <div className='dashboard container'>
     <div className='row'>

          <div className="cover-background">

          <div className="user-image">
            <img size='100x100' src={Profilepic} alt="A Profile Pic"/>
          </div>

          <div className="cover-content">
            <p style={{color:'white'}}>
              Herbbart Perry
            </p>
          </div>


          </div>

          <div className="user-info-left profile-edit">

            <form className="normal white">
                <label className='photo-label avatar-label'><i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>mode_edit</i> Change Avatar</label>
                  <input type="file" name="avatar" className="post-photo profile-photo-select" onChange={this.fileChangedHandler}/>

                  <label className='photo-label cover-photo-label'><i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>mode_edit</i> Change Cover Photo</label>
                  <input type="file" name="cover" className="post-photo cover-photo-select" onChange={this.fileChangedHandler}/>

                 <div className='input-field'>
                  <input type="date" placeholder=" Birthday" name="birthday" />
                  </div>
                   <div className='input-field'>
                  <input type="text" placeholder="  Gender" name="gender"/>
                  </div>

                   <div className='input-field'>

                  <input type="text" name="location" placeholder="  City"/>
                  </div>

                   <div className='input-field'>

                  <textarea cols="30"  rows="30"  placeholder="  About me" name="Bio"></textarea>
                  </div>


                  <button className="btn profile-edit-submit-button" style={{width:'100%'}}>Save Your Profile</button>



            </form>

          </div>




     </div>
   </div>

  )
 }
}

export default ProfileEdit;
