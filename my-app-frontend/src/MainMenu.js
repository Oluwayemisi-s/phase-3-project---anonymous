import SuggestedContainer from "./SuggestedContainer";
import GenresContainer from "./GenresContainer"
import AllMoviesContainer from "./AllMoviesContainer"

function MainMenu({user, suggested, genres, allMovies, setShow, setMovie, setAppear, setHideIt, setHide, setRenderMovies, setSketch, movie_in_genre, setGenrez}){

    console.log(user)

    return(
        <div>
            <h1>Welcome {user.user_name}! Here are our top picks for you</h1>
            <SuggestedContainer suggested={suggested} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setHide={setHide} setRenderMovies={setRenderMovies} setSketch={setSketch}/>
            <GenresContainer  genres={genres} allMovies = {allMovies} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setSketch={setSketch} movie_in_genre={movie_in_genre} setGenrez={setGenrez}/>
            {/* <AllMoviesContainer allMovies={allMovies}/> */}
        </div>
    )
}

export default MainMenu; 