function GenresContainer({genres}){

   const all_genres = genres.map((genre) => {
    <Genres key={genres.id} genre={genre}/>
   }) 
    return(
        <div>
            {all_genres}
        </div>
    )
}

export default GenresContainer;