import Suggested from "./Suggested";

function SuggestedContainer({suggested}){
    // limit the suggested movies to about 10 - This will be handled in Ruby
    const suggested_movies = suggested.map( movie => 
        <Suggested key={movie.id} movie={movie}/>
    )
    return (
        <div>
            {suggested_movies}
        </div>
    )
}

export default SuggestedContainer;