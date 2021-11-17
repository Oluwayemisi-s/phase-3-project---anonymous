import Genres from "./Genres"

function GenresContainer({genres, allMovies}){

    const all_genres = genres.map((genre) => 
    <Genres genre={genre} allMovies = {allMovies}/>
   ) 
    return(
        <div className = "">
            {all_genres}
        </div>
    )
}

export default GenresContainer;