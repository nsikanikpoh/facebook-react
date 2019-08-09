import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import UserList from './components/users/UserList';
import Search from './components/users/Search';
import PostDetails from './components/posts/PostDetails';
import ProfileEdit from './components/profile/ProfileEdit';
import ProfileShow from './components/profile/ProfileShow';
import Requests from './components/requests/Requests';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route exact path='/signin' component={Signin}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/people' component={UserList}/>
              <Route exact path='/search' component={Search}/>
              <Route exact path='/requests' component={Requests}/>
              <Route exact path='/post/:id' component={PostDetails}/>
              <Route exact path='/profile/:id' component={ProfileShow}/>
              <Route exact path='/profile/edit/:id' component={ProfileEdit}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
