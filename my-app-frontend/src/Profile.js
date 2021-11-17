import {useState} from 'react'
import MainMenu from "./MainMenu"
function Profile({profile, suggested, genres, allMovies}){

    const [user, setUser] = useState(null)

    function handleProfileClick(){
        setUser(profile)
    }

    return(
        <div className = "profileCard">
        <div onClick={handleProfileClick}>
            <img src={profile.profile_img} alt = "user"/>
            <p>{profile.user_name}</p>
            {user? <MainMenu key={user.id} user = {user} name={profile.user_name} suggested={suggested} genres={genres} allMovies={allMovies} /> : null}
        </div>
        </div>
    )
}
export default Profile