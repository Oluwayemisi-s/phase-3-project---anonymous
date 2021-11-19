import { useState } from 'react'

export default function ProfileForm ({pageReload, setAppear}) {

    const[form, setForm] = useState({
        user_name: "",
        profile_img: ""
    })

    function handleFormInput (e){   
        setForm({...form, [e.target.name]: e.target.value})
        console.log(e.target.name)
        console.log(e.target.value)
    }

    function handleFormSubmit (e) {
        e.preventDefault()
        console.log("form submitting...")
        fetch (`http://localhost:9292/profiles`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: form.user_name,
                profile_img: form.profile_img
            })
            })
            .then (resp => resp.json())
            .then ( data => console.log(data))
        pageReload(e)
    }



    return(
        <div className = "AddNewUserLine">
            <form onSubmit = {handleFormSubmit}  className = "searchform">
               
                <label>Enter your name:
                    <input onChange = {handleFormInput} type = "text" name = "user_name" value = {form.user_name}/>
                </label>
                
                <div className = "spaceBetween">
                </div>
                <label>Enter your profile picture:
                    <input onChange = {handleFormInput} type = "text" name = "profile_img" value = {form.profile_img}/>
                </label>
                <div className = "spaceBetween">
                </div>

                <button className = "submitButtonZ">Submit</button>

            </form>
        </div>
    )
}