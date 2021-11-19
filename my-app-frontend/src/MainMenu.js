import SuggestedContainer from "./SuggestedContainer";
import GenresContainer from "./GenresContainer"
import AllMoviesContainer from "./AllMoviesContainer"
import FakeDropDown from "./FakeDropDown";


function MainMenu({setLegalForm, setappearForGenres, setdisappearForGenre, setturnDeletePageOn, goku,setGoku, pageReload, user, suggested, genres, allMovies, setShow, setMovie, setAppear, setHideIt, setHide, setRenderMovies, setSketch, movie_in_genre, setGenrez, search, setSearch}){

   

    function fakeDropDown(e){
        setGoku((gohan)=>!gohan)
        console.log("Is this a good idea")
    }

    // function handleSearch(e){
    //     e.preventDefault()
    //     setSearch(e.target.value)
    // }

    

    return(
        <div>
            {/* <label>Search: <input type = "text" value = {search} onChange = {handleSearch}/></label> */}
             <div onClick = {fakeDropDown} className = "NavImage">
                 <div className="dropdown">
                {goku? <img src = {user.profile_img}/> : <FakeDropDown setLegalForm={setLegalForm} setHide ={setHide} pageReload = {pageReload} setturnDeletePageOn = {setturnDeletePageOn} user ={user}/>}  
                </div> 
            </div>  
            <h1 className = "MainTitle">Welcome {user.user_name}! Here are our top picks for you</h1>
            <SuggestedContainer setappearForGenres = {setappearForGenres} suggested={suggested} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setHide={setHide} setRenderMovies={setRenderMovies} setSketch={setSketch}/>
            <GenresContainer setappearForGenres = {setappearForGenres} setdisappearForGenre = {setdisappearForGenre} genres={genres} allMovies = {allMovies} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setSketch={setSketch} movie_in_genre={movie_in_genre} setGenrez={setGenrez}/>
            {/* <AllMoviesContainer allMovies={allMovies}/> */}
        </div>
    )
}

export default MainMenu; 