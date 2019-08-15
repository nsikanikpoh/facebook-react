import React, { Component } from 'react';
import { createComment } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Profilepic from '../../images/default.png'


class CreateComment extends Component {
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
    this.props.createComment({content: this.state.content, post_id: this.props.post_id});
    this.setState({
      content: ''
    })
  }

  render(){

    return(
      <>
        <form onSubmit={this.handleSubmit} className='normal white'>
           <a href='/'><img className="tac-image new-comment-image" src={Profilepic} alt="A Profile Pic"/></a>

            <textarea  className="comment-field" value={this.state.content} placeholder="Write a comment..." rows="1" id="content" onChange={this.handleChange}></textarea>

            <button className="btn blue darken-4" style={{width:'100%'}}>Comment</button>

        </form>
      </>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(CreateComment);
