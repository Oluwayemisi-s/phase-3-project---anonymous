import {useState} from "react"
import Profile from './Profile'
import MainMenu from "./MainMenu"
import MovieDetailinter from "./MovieDetailinter"
import AllMoviesContainer from "./AllMoviesContainer"
import FakeDropDown from "./FakeDropDown"
import DeleteProfilePage from "./DeleteProfilePage"
import AllGenresContainer from "./AllGenresContainer"
import ProfileForm from "./ProfileForm"
import LegalDisclaimers from "./LegalDisclaimers"


function ProfileContainer({pageReload, profiles, suggested, genres, allMovies, setDisappear, disappear}){
    const [appear, setAppear] = useState(true)
    const [user, setUser] = useState(null)
    const [movie, setMovie] = useState(null)
    const [show, setShow] = useState(false)
    const [hideIt, setHideIt] = useState(true)
    const [renderMovies, setRenderMovies] = useState(false)
    const [hide, setHide] = useState(true)
    const [sketch, setSketch] = useState(true)
    const [goku, setGoku] = useState(true)
    const [genrez, setGenrez] = useState("Comedy")
    const [turnDeletePageOn,setturnDeletePageOn] = useState(false)
    const [disappearForGenre, setdisappearForGenre] =useState(true)
    const [appearForGenres, setappearForGenres] =useState(false)
    const [hideForm, setHideForm] = useState(true)
    const [legalForm, setLegalForm] = useState(false)
    const [search, setSearch] = useState("")
    

    function setterOfDisappear(){
        setDisappear((cats)=>!cats)
    }

    function handleAddUser(e){
        //add a user 
        console.log("Hello!!!!")
        setAppear(false)
        setHideForm(currentState => !currentState)

        //pageReload(e)
      }

      const filteredMovies = allMovies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()) || m.genre.includes(search.toLowerCase()))


    // const movie_in_genre = allMovies.filter(movie => movie.genre.includes(genrez))

    const user_profile = profiles.map(profile => <Profile suggested={suggested} genres={genres} allMovies={allMovies}  key = {profile.id} profile = {profile} user = {user} setUser = {setUser} setAppear = {setAppear}/>)

   
    return (
        <div>
            <button className="button_design" onClick ={pageReload}> Log Out</button>
             <div className = {appearForGenres ? "":"candy"}>
                <AllGenresContainer setappearForGenres ={setappearForGenres} appearForGenres = {appearForGenres} genrez ={genrez} allMovies = {allMovies} setMovie ={setMovie} setShow = {setShow} setHideIt = {setHideIt} setSketch ={setSketch} genre />
                </div>

                <div className = {turnDeletePageOn ? "":"candy"}>
                {user? <DeleteProfilePage pageReload ={pageReload} user ={user}/>:null}
                </div>
           
            <div className = {disappear? "":"candy"} >
                <div className = {appear ? "userProfileLine" : "candy"}>
                    {user_profile} 
                    <button onClick = {handleAddUser}>Add User</button>
                </div>
                <div className={disappearForGenre ? "": "candy"}>
                <div className={hide ? "": "candy"}>
                    <div className={hideIt ? "" : "candy"}>
                        <div className = {appear ? "candy" : ""}>
                            {user? <MainMenu setLegalForm = {setLegalForm} setappearForGenres = {setappearForGenres} setGenrez = {setGenrez}setappearForGenres = {setappearForGenres} setdisappearForGenre={setdisappearForGenre} setturnDeletePageOn ={setturnDeletePageOn} setGoku ={setGoku} goku = {goku} pageReload = {pageReload} key={user.id} user = {user} name={user.user_name} suggested={suggested} genres={genres} allMovies={filteredMovies} setShow={setShow} setMovie={setMovie} setAppear={setAppear} setHideIt={setHideIt} setHide={setHide} setRenderMovies={setRenderMovies} setSketch={setSketch} setGenrez={setGenrez} search = {search} setSearch = {setSearch}/> : null}
                        </div>
                    </div>    
                </div>
                </div>
             </div>
             <div className = {show ? "" : "candy"}>
                    {movie ? <MovieDetailinter movie={movie}/> : null}
                </div>
                {/* <div>
                    <All
                </div> */}
                <div className = {sketch ? "" : "candy"}>
                    {renderMovies ? <AllMoviesContainer setappearForGenres = {setappearForGenres} allMovies={filteredMovies} setMovie={setMovie} setShow={setShow} setHideIt={setHideIt} setSketch={setSketch} setSearch = {setSearch} search = {search}/> : null}
                </div>
                <div>
                    {hideForm ? null : <ProfileForm pageReload = {pageReload} setAppear = {setAppear}/>}
                </div>
                <div className = {legalForm ? "": "candy"}>
                    {legalForm? <LegalDisclaimers pageReload ={pageReload} user ={user}/>:null}
                </div>
               
        </div>

    )
}
export default ProfileContainer;