import React  from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

/**
 * ?  =====Import Components=====
 */
import Post from './store/PostContext';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';


function App() {

// const {user} = useContext(AuthContext)
const {setUser} =useContext(AuthContext)
const {firebase} =useContext(FirebaseContext)

useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })



})

  return (
    <div>
  <Post>    
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/view">
          <View />
        </Route>
      </Router>
  </Post>    
    </div>
  );
}

export default App;
