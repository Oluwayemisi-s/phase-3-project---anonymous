
function FakeDropDown({pageReload,user,setHide, setturnDeletePageOn}){

  function loggingOftheOut(e){
    pageReload(e)
  }

  console.log(user)

  function setDeleteProfile (e){
    setturnDeletePageOn((dragons)=>!dragons)
    setHide((bears)=>!bears)
    console.log("firing")
  }
  return (
    <div>
      <img src = {user.profile_img}></img>
      <div className="fakedropdown">
        <button>Audio</button>
        <button>Edit Profile</button>
        <button>Legal Disclaims</button>
        <button>Parental Controls</button>
        <button onClick = {setDeleteProfile}>Delete Profile</button>
        <button onClick ={loggingOftheOut}>LogOut</button>
      </div>  
    </div>
    )
}
export default FakeDropDown;
