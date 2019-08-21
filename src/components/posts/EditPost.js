import React, { Component } from 'react';
import { editPost } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import Profilepic from '../../images/default.png';

class EditPost extends Component {
  constructor(props) {
        super(props);
         this.state = { content: this.props.post.content,
                        picture: ""
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
    this.props.editPost({content: this.state.content,
      id:this.props.post.id, user_id:this.props.post.user_id, image: this.state.picture,});
    this.setState({
      content: '',
      picture: ''
    })
  }

  render(){
    return(
      <div className= "new-post">
        <div className="new-post-top">
          <span>Edit Post </span>

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
           <button className="btn blue darken-4" style={{width:'100%'}}>Edit Post</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    editPost: (post) => dispatch(editPost(post))
  }
}

export default connect(null, mapDispatchToProps)(EditPost);
