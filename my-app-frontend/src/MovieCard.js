

function MovieCard({setappearForGenres, movie, setShow, setMovie, setAppear, setHideIt, setSketch}){

    //let img_src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.thumbnail}`

    function img_src () {
        if (movie.id === 1 || movie.id === 2 || movie.id === 3 || movie.id === 4 ||movie.id === 5){
            return movie.thumbnail
        } else{
            return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.thumbnail}`
        }
    } 

 console.log (img_src)

    function handleMovieClick(){
        setMovie(movie)
        setShow((cats) => !cats)
        setHideIt((dogs)=> !dogs)
        setSketch((apple) => !apple)
        setappearForGenres(false)
    }

    return (

        <div onClick={handleMovieClick} className = "MovieCard">
             <img src = {img_src()} alt = "thumbnail"/>
            <h3>{movie.title}</h3>
            {/* <p>{movie.description}</p> */}
            <p>{movie.runtime} minutes</p>
        </div>
    )
}
export default MovieCard;
