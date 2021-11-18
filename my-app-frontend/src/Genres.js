import MovieCard from "./MovieCard";

function Genres({setappearForGenres, setdisappearForGenre, genre , allMovies, setShow, setMovie, setAppear, setHideIt, setSketch, setGenrez}){

    // setGenrez(genre)

    const movie_in_genre = allMovies.filter(movie => movie.genre.includes(genre))
  

    function handleDisappear(e){
        setdisappearForGenre((baboons)=>!baboons)
        setappearForGenres((ocras)=>!ocras)
        setGenrez(genre)
    }

    
const movie_to_display = movie_in_genre.slice(0,5).map(movie => <MovieCard setappearForGenres ={setappearForGenres} key = {movie.id} movie = {movie} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setSketch={setSketch}/>)

    return(
        <div >
            {genre}
            <div className = "MovieCard">
                {movie_to_display}
            <button onClick={handleDisappear}>
                All {genre}
            </button>
            </div>
        </div>
    )
}
export default Genres;