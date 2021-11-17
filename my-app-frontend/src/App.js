import './App.css';
//import {useState} from 'react'
import Title from './Title'
import ProfileContainer from './ProfileContainer';
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import Profile from './Profile';

function App() {

  // const [logIn, setLogIn] = useState(false)

  return (
   
    <div>
      <h1>Hello World</h1>
      
      <Title />

    </div>

  );
}

export default App;
