import MovieCard from "./MovieCard"

function AllGenresContainer({allMovies, setMovie, setShow, setHideIt, setSketch}){

    const allM = allMovies.map( movie => 
        <MovieCard key={movie.id} movie={movie} setMovie={setMovie} setShow={setShow} setHideIt={setHideIt} setSketch={setSketch}/>
    )
    return(
        <div>
            {allM}
        </div>
    )
}

export default AllGenresContainer;