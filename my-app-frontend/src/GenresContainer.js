import Genres from "./Genres"

function GenresContainer({genres}){

   const all_genres = genres.map((genre) => 
    <Genres genre={genre}/>
   ) 
    return(
        <div className = "MovieLine">
            {all_genres}
        </div>
    )
}

export default GenresContainer;