function AllMovies({allMovies}){

    return (
        <div>
             <img src={allMovies.thumbnail}/>
            <h3>{allMovies.title}</h3>
            <p>{allMovies.description}</p>
            <p>{allMovies.runtime}</p>
        </div>
    )
}

export default AllMovies;