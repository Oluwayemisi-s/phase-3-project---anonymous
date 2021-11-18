import Suggested from "./MovieDetail";
import MovieCard from "./MovieCard";

function SuggestedContainer({suggested, setMovie, setShow,setAppear, setHideIt, setHide, setRenderMovies, setSketch}){
    // limit the suggested movies to about 10 - This will be handled in Ruby
    const suggested_movies = suggested.map( movie => 
        <MovieCard key={movie.id} movie={movie} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setSketch={setSketch}/>
    )

    function handleHide(){
        setHide((currentState) => !currentState)
        setRenderMovies((current) => !current)
    }
    return (
        <div>
            <div className = "MovieLine">
            {suggested_movies}
            <button onClick={handleHide}>
                All Movies
            </button>
            </div>
        </div>
    )
}

export default SuggestedContainer;