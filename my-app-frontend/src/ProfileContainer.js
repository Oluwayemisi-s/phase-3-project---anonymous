//import {useState} from "react"
import Profile from './Profile'

function ProfileContainer({profiles, suggested, genres, allMovies}){

    console.log(profiles)
    const user_profile = profiles.map(profile => <Profile suggested={suggested} genres={genres} allMovies={allMovies}  key = {profile.id} profile = {profile}/>)
   
    return (
        <div>
            {user_profile}
        </div>

    )
}
export default ProfileContainer;