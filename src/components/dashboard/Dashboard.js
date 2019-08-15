import React, { Component } from 'react';
import PostList from '../posts/PostList';
import CreatePost from '../posts/CreatePost';
import { getPosts } from '../../store/actions/postActions';
import Popup from "reactjs-popup";
import Profilepic from '../../images/default.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



class Dashboard extends Component {
 componentDidMount(){
   this.props.getPosts();
 }

  render(){
    const { auth, posts } = this.props;
      if(!auth) return <Redirect to='/signin'/>
    return(
      <div className='dashboard container'>
       <div className='row'>


        <div className="col s12 m4 l2">
           <p>Profile and Games</p>
        </div>

        <div className="col s12 m4 l7">
          <div className="posts">
            <CreatePost/>
            <PostList posts={posts}/>
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
    posts: state.post.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
