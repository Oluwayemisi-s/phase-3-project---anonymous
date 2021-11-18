import MovieCard from "./MovieCard"

function AllGenresContainer({ setappearForGenres, allMovies, setMovie, setShow, setHideIt, setSketch, genre, genrez}){

    const allMoviesInThatGenre = allMovies.filter(movie => movie.genre.includes(genrez))
    console.log(genre)
    console.log(allMoviesInThatGenre)

    const pleaseWorkEasily = allMoviesInThatGenre.map( movie => 
        <MovieCard setappearForGenres = {setappearForGenres} key={movie.id} movie={movie} setMovie={setMovie} setShow={setShow} setHideIt={setHideIt} setSketch={setSketch}/>
    )
    
    return(
        <div>
            hello
            {pleaseWorkEasily}
        </div>
    )
}

export default AllGenresContainer;