import React from 'react';
import { Link } from 'react-router-dom';
import Profilepic from '../../images/default.png';
import PostList from '../posts/PostList';


const ProfileShow = () =>{
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
           <a href="/" className="add-friend-button"><i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>person_add</i> Accept Friend Request</a>
            <a href="/" className="edit-your-profile-button"> <i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>mode_edit</i> Edit Your Profile </a>
         </div>

  </div>
         <div className="user-info-left-background">

         <div className="user-info-left">
           <p className='grey-text'>
             <b>Date of Birth:</b>
              14/03/1989
             <br/>

             <b>Gender:</b>
              Male
             <br/>

             <b>City:</b>
              Abuja
             <br/>

             <b>About Me:</b>
               I am God fearing and loves coding
           </p>
         </div>
       </div>
         <div className="friends-background friends">
         <h2>Perrys friends:</h2>
         <div className="friends-grid">
           <div>
               <a href="/" ><img size='100x100' src={Profilepic} alt="A Profile Pic"/></a>

               <p className="friend-name">
                 Sly
              </p>
           </div>

           <div>
               <a href="/" ><img size='100x100' src={Profilepic} alt="A Profile Pic"/></a>

               <p className="friend-name">
                 Parker
              </p>
           </div>

            </div>
          </div>

          <div className="user-posts">
            <PostList />
          </div>

         </div>
       </div>

  )
}

export default ProfileShow;
