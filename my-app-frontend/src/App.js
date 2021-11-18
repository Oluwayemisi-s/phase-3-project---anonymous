import './App.css';
//import {useState} from 'react'
import Title from './Title'
import ProfileContainer from './ProfileContainer';
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import Profile from './Profile';
import LegalDisclaimers from './LegalDisclaimers';

function App() {

  // const [logIn, setLogIn] = useState(false)

  function pageReload(e){
    window.location.reload()
  }

  return (
   
    <div>
      <button onClick ={pageReload}> Refresh</button>
      <Title pageReload ={pageReload} />
    
    </div>



  );
}

export default App;
