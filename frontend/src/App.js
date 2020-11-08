import React from 'react';
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './screens/Welcome';
import Login from './screens/Login.js';
import Register from './screens/Register';

import UserListScreen from './screens/userList.js';
import UserHome from './screens/UserHome.js';
import AddRecepient from './screens/AddRecepient.js'
import UserEditScreen from './screens/userUpdate.js';
import dotenv from 'dotenv'

import ChangePIN from './screens/ChangePIN.js';
import ATM from './screens/ATM';

dotenv.config()


function App() {
  
  return (
    <Router>

      <Header/>
     
      <main>
      <Container>
     
      <Route path='/login'component={Login} />
      <Route path='/register'component={Register} />

          <Route path='/change' component={ChangePIN} /> 

          <Route path='/home' component={UserHome} /> 
          <Route path='/atm' component={ATM} /> 
         

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
