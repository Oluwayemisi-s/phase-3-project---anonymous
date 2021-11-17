import Suggested from "./MovieDetail";
import MovieCard from "./MovieCard";

function SuggestedContainer({suggested, setMovie, setShow,setAppear, setHideIt}){
    // limit the suggested movies to about 10 - This will be handled in Ruby
    const suggested_movies = suggested.map( movie => 
        <MovieCard key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt}/>
    )
    return (
        <div>
            <div className = "MovieLine">
            {suggested_movies}
            </div>
        </div>
    )
}

export default SuggestedContainer;