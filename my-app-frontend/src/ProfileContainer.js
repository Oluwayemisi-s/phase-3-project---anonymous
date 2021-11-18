import {useState} from "react"
import Profile from './Profile'
import MainMenu from "./MainMenu"
import MovieDetail from "./MovieDetail"
import AllMoviesContainer from "./AllMoviesContainer"


function ProfileContainer({profiles, suggested, genres, allMovies, setDisappear, disappear}){
    const [appear, setAppear] = useState(true)
    const [user, setUser] = useState(null)
    const [movie, setMovie] = useState(null)
    const [show, setShow] = useState(false)
    const [hideIt, setHideIt] = useState(true)
    const [renderMovies, setRenderMovies] = useState(false)
    const [hide, setHide] = useState(true)
    const [sketch, setSketch] = useState(true)
    const [genrez, setGenrez] = useState("")

    function setterOfDisappear(){
        setDisappear((cats)=>!cats)
    }

    // const movie_in_genre = allMovies.filter(movie => movie.genre.includes(genrez))

    const user_profile = profiles.map(profile => <Profile suggested={suggested} genres={genres} allMovies={allMovies}  key = {profile.id} profile = {profile} user = {user} setUser = {setUser} setAppear = {setAppear}/>)

   
    return (
        <div>
            <div className = {disappear? "":"candy"} >
                <button onClick ={setterOfDisappear}>Logout</button>
                <div className = {appear ? "userProfileLine" : "candy"}>
                    {user_profile}
                </div>
                <div className={hide ? "": "candy"}>
                    <div className={hideIt ? "" : "candy"}>
                        <div className = {appear ? "candy" : ""}>
                            {user? <MainMenu key={user.id} user = {user} name={user.user_name} suggested={suggested} genres={genres} allMovies={allMovies} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setHide={setHide} setRenderMovies={setRenderMovies} setSketch={setSketch} setGenrez={setGenrez}/> : null}
                        </div>
                    </div>    
                </div>
             </div>
             <div className = {show ? "" : "candy"}>
                    {movie ? <MovieDetail movie={movie}/> : null}
                </div>
                {/* <div>
                    <All
                </div> */}
                <div className = {sketch ? "" : "candy"}>
                    {renderMovies ? <AllMoviesContainer allMovies={allMovies} setMovie={setMovie} setShow={setShow} setHideIt={setHideIt} setSketch={setSketch}/> : null}
                </div>
        </div>

    )
}
export default ProfileContainer;