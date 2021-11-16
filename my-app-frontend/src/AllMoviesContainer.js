function AllMoviesContainer({allMovies}){

    const all = allmoves.map((movie) => {
        <AllMovies key={movie.id} movie={movie}/>
    })
    return(
        <div>
            {all}
        </div>
    )
}

export default AllMoviesContainer;