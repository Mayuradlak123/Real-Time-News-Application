
import React from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News'
import Login from './Auth/Login';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import Register from './Auth/Register';

import Contact from './Component/Contact'

import Footer from './Component/Footer';
function App() {
  return (
    <Router>
       <Navbar  />
     <Switch>
     <Route exact path="/" key='general'><News category="general"/> </Route>
     <Route exact path="/business" key='business'><News category="business" /> </Route>
     <Route exact path="/sports" key='sports'><News category="sports"/> </Route>
     <Route exact path="/health" key='health'><News  category="health"/> </Route>
     <Route exact path="/science" key='science' component={<News category="science"/>}><News category="science"/> </Route>
     <Route exact path="/technology" key='technology'><News category="technology"/> </Route>
     <Route exact path="/entertainment" key='entertainment'><News category="entertainment"/> </Route>
 
       <Route exact path="/login"> <Login/>    </Route>
    <Route exact path="/contact"> <Contact/>  </Route>
     
    <Route exact path='/register'> <Register/> </Route>
    <Route exact path='/headlines'> <a href="https://www.ndtv.com/latest"></a> </Route>
  
    </Switch>
    <Footer/>
    </Router>
  
  );
}

export default App;