import {useState} from 'react'
import MainMenu from "./MainMenu"
function Profile({profile, suggested, genres, allMovies, user, setUser, setAppear, setMovie, setShow}){

    // const [user, setUser] = useState(null)

    function handleProfileClick(){
        setUser(profile)
        setAppear(current => !current)
    }

    return(
       
        <div className = "profileCard">
            <div onClick={handleProfileClick}>
                <img src={profile.profile_img} alt = "user"/>
                <p>{profile.user_name}</p>
            </div>
        </div>
        
    )
}
export default Profile