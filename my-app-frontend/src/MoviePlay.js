
import React from 'react'
import ReactPlayer from 'react-player'

function MoviePlay({movie}){

    return(
        <div>
            We made it
            <p>
            currently playing {movie.title}
            <ReactPlayer controls url = "https://www.youtube.com/watch?v=3KasqdsIaIs&list=PLHPTxTxtC0ibVZrT2_WKWUl2SAxsKuKwx&index=159" />
            </p>
        </div>
    )
}

export default MoviePlay;