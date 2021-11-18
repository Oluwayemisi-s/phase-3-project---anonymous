function MovieDetail({movie, SetShowMovie}){


    function GoToMovie(e){
        SetShowMovie((dolphins)=>!dolphins)
    }
    return (
     
        <div>
            <img src={movie.thumbnail} alt = "thumbnail" onClick ={GoToMovie}/>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>{movie.runtime} minutes</p>
        </div>
    )
}

export default MovieDetail;