import React from 'react';
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <Router>

      <Header/>
      <Container>
      <main>
      <Route path='/'component={Welcome} exact />
      <Route path='/login'component={Login} exact />
      <Route path='/signup'component={Register} exact />
      </main>
      </Container>
     
    
    </Router>
  );
}

export default App;
