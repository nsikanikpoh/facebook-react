import React, { Component } from 'react';
//import { createProject } from '../../store/actions/projectActions';
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
    console.log(this.state)
    //this.props.createProject(this.state);
    //this.props.history.push('/');
  }

  render(){

    return(
      <>
        <form onSubmit={this.handleSubmit} className='normal white'>
           <a href='/'><img className="tac-image new-comment-image" src={Profilepic} alt="A Profile Pic"/></a>


            <textarea  className="comment-field" placeholder="Write a comment..." rows="1" id="content" onChange={this.handleChange}></textarea>



            <button className="btn blue darken-4" style={{width:'100%'}}>Comment</button>

        </form>
      </>

    )
  }
}

export default CreateComment;
