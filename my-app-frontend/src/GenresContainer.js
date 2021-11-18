import Genres from "./Genres"

function GenresContainer({genres, allMovies, setShow, setMovie, setAppear, setHideIt, setSketch, movie_in_genre, setGenrez}){

    const all_genres = genres.map((genre) => 
    <Genres genre={genre} allMovies = {allMovies} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setSketch={setSketch} movie_in_genre={movie_in_genre} setGenrez={setGenrez}/>
   ) 
    return(
        <div className = "">
            {all_genres}
        </div>
    )
}

export default GenresContainer;
