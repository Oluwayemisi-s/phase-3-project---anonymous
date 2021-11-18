
import React from 'react'
import ReactPlayer from 'react-player'

function MoviePlay({movie}){

    return(
        <div>
            We made it
            <p>
            currently playing {movie.title}
            <ReactPlayer controls url = 'https://www.youtube.com/watch?v=c3vuz-OMF2g' />
            </p>
        </div>
    )
}

export default MoviePlay;