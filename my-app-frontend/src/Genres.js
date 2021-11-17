import MovieCard from "./MovieCard";

function Genres({genre , allMovies}){

    const movie_in_genre = allMovies.filter(movie => movie.genre.includes(genre))
    const movie_to_display = movie_in_genre.slice(0,5).map(movie => <MovieCard key = {movie.id} movie = {movie}/>)
    return(
        <div >
            {genre}
            <div className = "MovieCard">
                {movie_to_display}
            </div>
        </div>
    )
}
export default Genres;