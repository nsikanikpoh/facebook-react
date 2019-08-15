import React, { Component } from 'react';
import { createPost } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import Profilepic from '../../images/default.png';

class CreatePost extends Component {
  constructor(props) {
        super(props);
         this.state = { content: '',
                        picture: ''
                      };
    }

   fileChangedHandler = (event) => {
    const file = event.target.files[0]
    this.setState({
      picture: file,
    })
  }

   handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

   handleSubmit = (e) =>{
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      content: '',
      picture: ''
    })
  }

  render(){
    return(
      <div className= "new-post">
        <div className="new-post-top">
          <span>New Post </span>

        </div>
        <br/>
        <form onSubmit={this.handleSubmit} className='normal white'>
          <span><img className="fa-image tac-image" src={Profilepic} alt="A Profile Pic"/>
          <textarea rows="3" className="materialize-textarea" value={this.state.content} id="content" placeholder="What's on your mind, Sly?" onChange={this.handleChange}></textarea>
          </span>

           <span className="photo-label" style={{color: 'rgb(66, 103, 178)'}}><i className="material-icons">photo</i>
            Photo
            <input type="file" value={this.state.picture} className="post-photo" onChange={this.fileChangedHandler}/>
           </span>
           <button className="btn blue darken-4" style={{width:'100%'}}>Post</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(CreatePost);
