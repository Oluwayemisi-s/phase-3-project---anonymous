

function MovieCard({movie, setShow, setMovie, setAppear, setHideIt}){

    let img_src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv${movie.thumbnail}`

    function handleMovieClick(){
        setMovie(movie)
        setShow((cats) => !cats)
        setHideIt((dogs)=> !dogs)
    }

    return (
        <div onClick={handleMovieClick} className = "MovieCard">
             <img src = {img_src} alt = "thumbnail"/>
            <h3>{movie.title}</h3>
            {/* <p>{movie.description}</p> */}
            <p>{movie.runtime} minutes</p>
        </div>
    )
}
export default MovieCard;
