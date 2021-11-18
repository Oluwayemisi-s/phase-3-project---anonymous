import {useState, useEffect} from 'react'
import ProfileContainer from './ProfileContainer'
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';


function Title({pageReload}){
    const [suggested, setSuggested] = useState([])
    const [genres, setGenres] =useState([])
    const [allMovies, setAllMovies] = useState([])
    const [logIn, setLogIn] = useState(false)
    const [profiles, setProfiles] =  useState([])
    const [disappear,setDisappear] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/movies')
        .then((resp) => resp.json())
        .then((data) => setAllMovies(data))
    },[])

    useEffect(() => {
        fetch('http://localhost:9292/movies/genres')
        .then((resp) => resp.json())
        .then((data) => setGenres(data))
    },[])

    useEffect(() => {
        fetch('http://localhost:9292/movies/suggested')
        .then((resp) => resp.json())
        .then((data) => setSuggested(data))
    },[])

    useEffect(() => {
        fetch('http://localhost:9292/profiles')
        .then((resp) => resp.json())
        .then((data) => setProfiles(data))
    },[])


    function handleButtonClick(){
        setLogIn ((currentState) => !currentState)
        setDisappear((cats)=> !cats)
    }

    // console.log("suggested:", suggested)
    // console.log("all movies:", allMovies)
    // console.log("genres:", genres)
    // console.log("profiles:", profiles)

    return (
        <div className = "Everything">
            {logIn? <ProfileContainer pageReload = {pageReload} suggested={suggested} genres={genres} allMovies={allMovies} profiles = {profiles} disappear = {disappear} setDisappear ={setDisappear}/> : null}
            <div className = {disappear?"candy":""}>
            <img src="https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg" alt = "welcome"/>
            <button onClick={handleButtonClick}>
                {logIn? "Log out" : "Log in"} 
            </button>
{/* 
            <NavLink to="/">
                ProfileContainer
            </NavLink> */}

            {/* {logIn? <NavLink to="/ProfileContainer">
                ProfileContainer </NavLink> : <NavLink to="/">Title</NavLink> } */}
            </div>
        </div>
    )


}

export default Title;