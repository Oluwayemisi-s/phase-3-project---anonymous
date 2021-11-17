import MovieCard from "./MovieCard"

function AllMoviesContainer({allMovies}){

    const allM = allMovies.map( movie => 
        <MovieCard key={movie.id} movie={movie}/>
    )
    return(
        <div >
            {allM}
        </div>
    )
}

export default AllMoviesContainer;