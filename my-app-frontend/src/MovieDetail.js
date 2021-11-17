
function MovieDetail({movie}){

    return (
        <div>
            <img src={movie.thumbnail} alt = "thumbnail"/>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>{movie.runtime} minutes</p>
        </div>
    )
}

export default MovieDetail;