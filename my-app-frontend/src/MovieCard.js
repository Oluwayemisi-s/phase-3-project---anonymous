

function MovieCard({setappearForGenres, movie, setShow, setMovie, setAppear, setHideIt, setSketch}){

    let img_src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.thumbnail}`

    function handleMovieClick(){
        setMovie(movie)
        setShow((cats) => !cats)
        setHideIt((dogs)=> !dogs)
        setSketch((apple) => !apple)
        setappearForGenres(false)
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
