import SuggestedContainer from "./SuggestedContainer";
import GenresContainer from "./GenresContainer"
import AllMoviesContainer from "./AllMoviesContainer"

function MainMenu({user, suggested, genres, allMovies}){

    console.log(user)

    return(
        <div>
            <h1>Welcome {user.user_name}! Here are our top picks for you</h1>
            <SuggestedContainer suggested={suggested}/>
            <GenresContainer  genres={genres} allMovies = {allMovies}/>
            {/* <AllMoviesContainer allMovies={allMovies}/> */}
        </div>
    )
}

export default MainMenu; 