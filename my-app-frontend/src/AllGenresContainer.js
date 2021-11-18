import MovieCard from "./MovieCard"
import { useState } from 'react'

function AllGenresContainer({ setappearForGenres, allMovies, setMovie, setShow, setHideIt, setSketch, genre, genrez}){

    const [search, setSearch] = useState("")

        function handleSearch(e){
            e.preventDefault()
            setSearch(e.target.value)
        }

    const filteredMovies = allMovies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()) || m.genre.includes(search.toLowerCase()))

    const allMoviesInThatGenre = filteredMovies.filter(movie => movie.genre.includes(genrez))

    const pleaseWorkEasily = allMoviesInThatGenre.map( movie => 
        <MovieCard setappearForGenres = {setappearForGenres} key={movie.id} movie={movie} setMovie={setMovie} setShow={setShow} setHideIt={setHideIt} setSketch={setSketch}/>
    )
    
    return(
        <div>
            <label>Search: <input type = "text" value = {search} onChange = {handleSearch}/></label>
        
            {pleaseWorkEasily}
        </div>
    )
}

export default AllGenresContainer;