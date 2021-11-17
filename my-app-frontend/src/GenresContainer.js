import Genres from "./Genres"

function GenresContainer({genres, allMovies, setShow, setMovie, setAppear, setHideIt}){

    const all_genres = genres.map((genre) => 
    <Genres genre={genre} allMovies = {allMovies} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt}/>
   ) 
    return(
        <div className = "">
            {all_genres}
        </div>
    )
}

export default GenresContainer;
