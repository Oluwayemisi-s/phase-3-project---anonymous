
import React from 'react'
import ReactPlayer from 'react-player'

function MoviePlay({movie}){

    // console.log(movie.thumbnail)
    // console.log(movie.backdrop)

    function movieLink () {
        if (movie.id === 1 || movie.id === 2 || movie.id === 3 || movie.id === 4 ||movie.id === 5){
            return movie.movie_link
        } else{
            return `https://www.youtube.com/watch?v=c3vuz-OMF2g&t=2518s`
        }
    } 

    return(
        <div>
            <div className ="ImagePlayer">
            Currently Playing {movie.title}...
            <ReactPlayer controls url = {movieLink()} />
            </div>
        </div>
    )
}

export default MoviePlay;