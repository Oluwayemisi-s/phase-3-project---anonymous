
function DeleteProfilePage({pageReload, user}){

function DeleteThatPerson(e){
  pageReload(e)
}

function loljk(e){
  pageReload(e)
}

  return (
    <div>
    <>YOU DONT WANNA DO THAT {user.user_name.toUpperCase()}</>
    <p>
    <button onClick ={DeleteThatPerson}>YOU KNOW I DO</button>
    </p>
    <p>
    <button onClick ={loljk}>LOL JK CHILL TAKE ME BACK</button>
    </p>
    </div>
    )
}
export default DeleteProfilePage;
