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
    //const [loginDisappear, setLoginDisappear] = useState(true)

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
        setLogIn (true)
        setDisappear((cats)=> !cats)
    }

    // console.log("suggested:", suggested)
    // console.log("all movies:", allMovies)
    // console.log("genres:", genres)
    // console.log("profiles:", profiles)

    return (
        <div className = "Everything">
            {logIn? <ProfileContainer pageReload = {pageReload} suggested={suggested} genres={genres} allMovies={allMovies} profiles = {profiles} disappear = {disappear} setDisappear ={setDisappear}/> : null}
            <div className = {disappear?"candy":"LoginPage"}>
                <div className = "BoxForTitleImage">
                <div className = "SpaceBetweenTitle"></div>
                <img src="https://i.imgur.com/CaBpbR4.png" alt = "welcome"/>
                
                <div className = "SpaceBetweenTitle"></div>
                </div>
                <div className = "BoxForFont">
                <div className = "SpaceBetweenFontLeft"></div>
                <div className = "textSubtitle">WE DON'T PAY SO YOU DONT HAVE TO</div>
                <div className = "SpaceBetweenFontRight"></div>
                </div>
                <div className="LoginButton">
                    <div className ="BoxForButton">
                    <div className = "SpaceBetweenButton"></div>
                    <button className = {logIn ? "candy" : ""} onClick={handleButtonClick}>
                        Log In
                    </button>
                    <div className = "SpaceBetweenButton"></div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Title;