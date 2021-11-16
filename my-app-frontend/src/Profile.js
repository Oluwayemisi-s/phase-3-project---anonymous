import {useState} from 'react'
function Profile({profile, suggested, genres, allMovies}){

    const [user, setUser] = useState("")

    function handleProfileClick(){
        setUser('userOne')
    }

    return(
        <div onClick={handleProfileClick}>
            <img src={profile.image}/>
            <p>{profile.user_name}</p>
            {user? <MainMenu key={user.id} name={profile.user_name} suggested={suggested} genres={genres} allMovies={allMovies} /> : null}
        </div>
    )
}
export default Profile