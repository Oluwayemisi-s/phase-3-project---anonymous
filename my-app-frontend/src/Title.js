import {useState, useEffect} from 'react'
import ProfileContainer from './ProfileContainer'

function Title(){
    const [suggested, setSuggested] = useState([])
    const [genres, setGenres] =useState([])
    const [allMovies, setAllMovies] = useState([])
    const [logIn, setLogIn] = useState(false)
    const [profiles, setProfiles] =  useState([])

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
    }

    // console.log("suggested:", suggested)
    // console.log("all movies:", allMovies)
    // console.log("genres:", genres)
    // console.log("profiles:", profiles)

    return (
        <div>
            <img src="https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg" alt = "welcome"/>
            <button onClick={handleButtonClick}>
                {logIn? "Log out" : "Log in"} 
            </button>

            {logIn? <ProfileContainer suggested={suggested} genres={genres} allMovies={allMovies} profiles = {profiles}/> : null}
        </div>
    )


}

export default Title;