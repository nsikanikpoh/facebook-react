import React, { Component } from 'react';
import PostList from '../posts/PostList';
import CreatePost from '../posts/CreatePost';
import Popup from "reactjs-popup";
import Profilepic from '../../images/default.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-materialize';
import { getPosts, deletePost } from '../../store/actions/postActions';


class Dashboard extends Component {
 componentDidMount(){
   this.props.getPosts();
 }

 delPost = (id) => {
   const { posts } = this.props;
   posts.filter(post => post.id !== id);
   this.props.deletePost(id);
}

  render(){
    const { auth, posts, user_id } = this.props;
      if(!auth) return <Redirect to='/signin'/>
      const trigger = <div className= "new-post">
        <div className="new-post-top">
          <span>New Post </span>

        </div>
        <br/>
        <form className='normal white'>
          <span><img className="fa-image tac-image" src={Profilepic} alt="A Profile Pic"/>
          <textarea rows="3" className="materialize-textarea" value="" id="content" placeholder="What's on your mind, Sly?" onChange={this.handleChange}></textarea>
          </span>
        </form>
      </div>

      ;
    return(
      <div className='dashboard container'>
       <div className='row'>


        <div className="col s12 m4 l2">
           <p>Profile and Games</p>
        </div>

        <div className="col s12 m4 l7">
          <div className="posts">
            <Modal header="Modal Header" trigger={trigger}>
                <CreatePost/>
            </Modal>

            <PostList posts={posts} deletePost={this.delPost} user_id={user_id}/>
          </div>
        </div>

        <div className="col s12 m4 l3">
           <p>Advert Section</p>
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
    posts: state.post.posts,
    user_id: state.auth.user && state.auth.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPosts: () => dispatch(getPosts()),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
