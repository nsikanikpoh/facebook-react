import React from 'react';
import UserSummary from './UserSummary';
import { Link } from 'react-router-dom';


const Search = () =>{
  return(

        <div className='dashboard container'>
         <div className='row'>


          <div class="col s12 m4 l2">
             <p>Profile and Games</p>
          </div>

          <div class="col s12 m4 l7">
          <div class="users-index">
            <h1>Search Result</h1>

            <div class="all-users">
              <div class="users-grid">

                  <UserSummary />
                  <UserSummary />
                  <UserSummary />
              </div>
            </div>
          </div>
          </div>

          <div class="col s12 m4 l3">
             <p>Advert Section</p>
          </div>
         </div>
       </div>

  )
}

export default Search;
