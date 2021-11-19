function MovieDetail({movie, SetShowMovie}){

    let img_src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.thumbnail}`
    let img_src1 = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop}`
    function GoToMovie(e){
        SetShowMovie((dolphins)=>!dolphins)
    }
    return (
     
        <div className="MovieDetail">
            <div className="MovieDetailPicture">
                <img src={img_src} alt = "thumbnail" onClick ={GoToMovie}/>
                <img src={img_src1} alt = "backdrop" onClick ={GoToMovie}/>
            </div>
            <h2>{movie.title}</h2>
            <h4>{movie.runtime} minutes</h4>
            <p>{movie.description}</p>
        </div>
    )
}

export default MovieDetail;