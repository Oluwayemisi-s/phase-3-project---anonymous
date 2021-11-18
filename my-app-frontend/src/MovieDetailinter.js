import { useState } from "react"
import MovieDetail from "./MovieDetail"
import MoviePlay from "./MoviePlay"

function MovieDetailinter({movie}){

    const [showMoviePage,SetShowMovie] = useState(true)


    return (
      <>
     {showMoviePage? <MovieDetail movie = {movie} SetShowMovie = {SetShowMovie}/>: <MoviePlay movie = {movie}/>}
     </>
    )
}

export default MovieDetailinter;