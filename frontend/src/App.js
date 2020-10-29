import React from 'react';
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './screens/Welcome';
import Login from './screens/Login.js';
import Register from './screens/Register';
import ProfileScreen from './screens/UserProfile.js';
import UserListScreen from './screens/userList.js';
import UserHome from './screens/UserHome.js';
import AddRecepient from './screens/AddRecepient.js'
import UserEditScreen from './screens/userUpdate.js';
import dotenv from 'dotenv'

dotenv.config()


function App() {
  
  return (
    <Router>

      <Header/>
     
      <main>
      <Container>
     
      <Route path='/login'component={Login} />
      <Route path='/register'component={Register} />

          <Route path='/profile' component={ProfileScreen} /> 

          <Route path='/home' component={UserHome} /> 
          <Route path='/addrec' component={AddRecepient} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          
          <Route path='/'component={Welcome} exact />
        </Container>
        </main>
        </Router>
     
     
    
    
  );
}

export default App;
