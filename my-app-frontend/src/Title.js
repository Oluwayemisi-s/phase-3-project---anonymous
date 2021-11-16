import {useState} from 'react'
import ProfileContainer from './ProfileContainer'

function Title(){
    const [suggested, setSuggested] = useState([{
        title: "Curious case of Benjamin",
        genre: "Comedy",
        description: "It is just a test",
        thumbnail: "https://cdn.cinematerial.com/p/297x/qwctuwuv/bloodshot-indian-movie-poster-md.jpg?v=1579984252",
        movie_link: "https://www.youtube.com/watch?v=rhmT5yTkGfU"
      }])
    const [genres, setGenres] =useState(['Comedy'])
    const [allMovies, setAllMovies] = useState([{
        title: "Curious case of Benjamin",
        genre: "Comedy",
        description: "It is just a test",
        thumbnail: "https://cdn.cinematerial.com/p/297x/qwctuwuv/bloodshot-indian-movie-poster-md.jpg?v=1579984252",
        movie_link: "https://www.youtube.com/watch?v=rhmT5yTkGfU"
      }])
    const [logIn, setLogIn] = useState(false)

    function handleButtonClick(){
        setLogIn ((currentState) => !currentState)
    }

    return (
        <div>
            <img src=""/>
            <button onClick={handleButtonClick}>
                {logIn? "Log out" : "Log in"} 
            </button>

            {logIn? <ProfileContainer suggested={suggested} genres={genres} allMovies={allMovies} /> : null}
        </div>
    )


}

export default Title;