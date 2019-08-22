import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profilepic from '../../images/default.png';
import PostList from '../posts/PostList';
import { Redirect } from 'react-router-dom';
import { editRequest, createRequest, getProfile } from '../../store/actions/postActions';
import { connect } from 'react-redux';

class ProfileShow extends Component {

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getProfile(id);
  }
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.match.params.id !== prevProps.match.params.id) {
    this.props.getProfile(this.props.match.params.id);
  }
}

  delPost = (id) => {
    const { posts } = this.props.profile.posts;
    posts.filter(post => post.id !== id);
    this.props.deletePost(id);
 }

  render(){
    const { auth, profile, user, createRequest, editRequest } = this.props;
    const posts = profile && profile.posts;
    const userProfile = profile && profile.profile;
    console.log(userProfile && userProfile);
    console.log(userProfile && userProfile.user_friends);

    if(!auth) return <Redirect to='/signin'/>

       const editProfileButton = userProfile && userProfile.user_id == user.id ?
       <Link className="edit-your-profile-button" onClick={() => {return <Redirect to='/profile/edit'/>} }>
       <i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>mode_edit</i>
       Edit Your Profile </Link>
       : null

       const actionButton = user && user.friend_request_ids && user.friend_request_ids.includes(userProfile && userProfile.user_id) ?
       <Link
        onClick={() => {editRequest({requester_id:userProfile.user_id})}}
       >Accept Friend Request</Link>
       : null

       const actionButtonAdd = userProfile && userProfile.user_id == user.id ||
       user && user.friend_request_ids && user.friend_request_ids.includes(userProfile.user_id)  ||
       user && user.friends_ids && user.friends_ids.includes(profile.profile.user_id) ||
       user && user.sent_request_ids &&  user.sent_request_ids.includes(userProfile.user_id)
       ? null :
       <Link
        onClick={() => {createRequest({requestee_id:userProfile.user_id})}}
       > <i className="material-icons" style={{color:'rgb(66, 103, 178)'}}>person_add</i> Add friends</Link>

       const sentText =  user && user.sent_request_ids &&  user.sent_request_ids.includes(userProfile.user_id) ?
       <Link
       >Request Sent</Link>
       : null

    return(
          <div className='dashboard container'>
           <div className='row'>

           <div className="cover-background">
           <div className="user-image">
             <img size='100x100' src={Profilepic} alt="A Profile Pic"/>
           </div>

           <div className="cover-content">
             <p style={{color:'white'}}>
               {userProfile && userProfile.user_full_name}
             </p>


             {actionButton}{actionButtonAdd}{editProfileButton}{sentText}



           </div>
          </div>
           <div className="user-info-left-background">

           <div className="user-info-left">
             <p className='grey-text'>
               <b>Date of Birth:</b>
                {userProfile && userProfile.birthday}
               <br/>

               <b>Gender:</b>
                {userProfile && userProfile.gender}
               <br/>

               <b>City:</b>
                {userProfile && userProfile.location}
               <br/>

               <b>About Me:</b>
                 {userProfile && userProfile.bio}
             </p>
           </div>
         </div>
           <div className="friends-background friends">
           <h5>{userProfile && userProfile.user_first_name + "'s"} friends:</h5>
           <div className="friends-grid">

           {
             userProfile && userProfile.user_friends && userProfile.user_friends.map(friend => {
               return(
                 <div className="friends-grid" key={friend.id}>
                     <Link to={'/profile/' + friend.id} ><img size='100x100' src={Profilepic} alt="A Profile Pic"/>

                     <p className="friend-name">
                       {friend.first_name} {friend.last_name}
                    </p>
                    </Link>
                 </div>
               )
             })
           }
              </div>
            </div>

            <div className="user-posts">
              <PostList posts={posts} deletePost={this.delPost} user_id={user.id}/>
            </div>

           </div>
         </div>

    )

  }

}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    auth: state.auth.isAuthenticated,
    profile: state.post.profile,
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createRequest: (id) => dispatch(createRequest(id)),
    editRequest: (id) => dispatch(editRequest(id)),
    getProfile: (id) => dispatch(getProfile(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);
