import {useState, useEffect} from "react"
import Profile from 'react'

function ProfileContainer({suggested, genres, allMovies}){

    const [profile, setProfile] =  useState([])
    
    // useEffect(() => {
    //     fetch('')
    //     .then((resp) => resp.json())
    //     .then((data) => setProfile(data))
    // },[])

    const user_profile = profile.map(user => <Profile suggested={suggested} genres={genres} allMovies={allMovies}  key = {user.id} profile ={user}/>)
    // console.log(suggested)
    // console.log(allMovies)
    // console.log(genres)
    return (
        <div>
            {user_profile}
        </div>

    )
}
export default ProfileContainer;