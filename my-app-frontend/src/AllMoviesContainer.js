import MovieCard from "./MovieCard"

function AllMoviesContainer({allMovies, setMovie, setShow, setHideIt, setSketch, setSearch, search}){

    const allM = allMovies.map( movie => 
        <MovieCard key={movie.id} movie={movie} setMovie={setMovie} setShow={setShow} setHideIt={setHideIt} setSketch={setSketch}/>
    )


    function handleSearch(e){
        e.preventDefault()
        setSearch(e.target.value)
    }

    return(
        <div>
            <label>Search: <input type = "text" value = {search} onChange = {handleSearch}/></label>
            {allM}
        </div>
    )
}

export default AllMoviesContainer;