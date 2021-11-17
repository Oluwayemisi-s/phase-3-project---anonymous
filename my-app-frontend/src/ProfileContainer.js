//import {useState} from "react"
import Profile from './Profile'

function ProfileContainer({profiles, suggested, genres, allMovies, setDisappear, disappear}){

    function setterOfDisappear(){
        setDisappear((cats)=>!cats)
    }

    console.log(profiles)
    const user_profile = profiles.map(profile => <Profile suggested={suggested} genres={genres} allMovies={allMovies}  key = {profile.id} profile = {profile}/>)
   
    return (
        <div>
            <div className = {disappear? "":"candy"} >
            <button onClick ={setterOfDisappear}>Logout</button>
            <div className = "userProfileLine">
            {user_profile}
            </div>
            </div>
        </div>

    )
}
export default ProfileContainer;