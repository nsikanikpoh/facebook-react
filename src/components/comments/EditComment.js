import React, { Component } from 'react';
import { editComment } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Profilepic from '../../images/default.png'
import { Link } from 'react-router-dom';

class EditComment extends Component {
  state = {
    content: this.props.comment.content
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.editComment({id:this.props.comment.id, content: this.state.content,
      post_id:this.props.comment.post_id, user_id:this.props.comment.user_id});
    // this.props.history.push(`/post/${this.props.comment.post_id}`);
    this.setState({
      content: ''
    })
  }

  render(){

    return(
      <>
        <form onSubmit={this.handleSubmit} className='normal white'>
           <Link to={'/profile' + this.props.comment.user_id}><img className="tac-image new-comment-image" src={Profilepic} alt="A Profile Pic"/></Link>

            <textarea  className="comment-field" value={this.state.content} placeholder="Write a comment..." rows="1" id="content" onChange={this.handleChange}></textarea>

            <button className="btn blue darken-4" style={{width:'100%'}}>Edit Comment</button>

        </form>
      </>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    editComment: (comment) => dispatch(editComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(EditComment);
