import MovieDetail from "./MovieDetail";

function MovieCard({movie}){

    let img_src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv${movie.thumbnail}`

    return (
        <div className = "MovieCard">
             <img src = {img_src} alt = "thumbnail"/>
            <h3>{movie.title}</h3>
            {/* <p>{movie.description}</p> */}
            <p>{movie.runtime} minutes</p>
        </div>
    )
}
//asdas
export default MovieCard;
