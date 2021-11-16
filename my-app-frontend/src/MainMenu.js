import Profile from "./Profile";

function MainMenue({user, suggested, genres, AllMovies}){

    return(
        <div>
            <h1>`Welcome ${user}! Here are our top picks for you`</h1>
            <SuggestedContainer suggested={suggested}/>
            <GenresContainer  genres={genres}/>
            <AllMoviesContainer allMovies={allMovies}/>
        </div>
    )
}

export default MainMenu; 