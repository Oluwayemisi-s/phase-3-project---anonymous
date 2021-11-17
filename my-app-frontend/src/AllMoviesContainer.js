import AllMovies from "./AllMovies"

function AllMoviesContainer({allMovies}){

    const allM = allMovies.map( movie => 
        <AllMovies key={movie.id} movie={movie}/>
    )
    return(
        <div>
            {allM}
        </div>
    )
}

export default AllMoviesContainer;