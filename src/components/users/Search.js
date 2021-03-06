import React, { Component } from 'react';
import UserSummary from './UserSummary';
import { Link } from 'react-router-dom';
import { getSearch, getRequests, editRequest, createRequest } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Search extends Component{

  componentDidMount(){
    this.props.getSearch();
  }

 render(){
    const { requests, user, editRequest, createRequest, auth } = this.props;
   if(!auth) return <Redirect to='/signin'/>
  return(
    <div className='dashboard container'>
     <div className='row'>


      <div className="col s12 m4 l2">
         <p>Profile and Games</p>
      </div>

      <div className="col s12 m4 l7">
      <div className="users-index">
        <h1>Search Result</h1>

        <div className="all-users">
          <div className="users-grid">

          {
            requests && requests.map(request => {
              return(
                <span key={request.id}>
                  <UserSummary request={request} user={user} editRequest={editRequest} createRequest={createRequest} />
                </span>
              )
            })
          }


          </div>
        </div>
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
    requests: state.post.search,
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getSearch: () => dispatch(getSearch()),
    getRequests: () => dispatch(getRequests()),
    createRequest: (id) => dispatch(createRequest(id)),
    editRequest: (id) => dispatch(editRequest(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
