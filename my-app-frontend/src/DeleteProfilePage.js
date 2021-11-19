
function DeleteProfilePage({pageReload, user}){

function deleteThatPerson(e){
  ///deleteperson 
  console.log(user.id)
  fetch (`http://localhost:9292/profiles/${user.id}`,{
      method: 'DELETE',
  })
    .then (resp => resp.json())
    .then (deleted => console.log("deleted the user"))

    pageReload(e)
}

// const deleteUser = (id) => {
//   profiles.filter((profile) => profile.id !== id)
 
// }

function loljk(e){
  pageReload(e)
}

  return (
    <div className = "pleaseworkeasilypart2">
      <div className="BoxForTextZZZ">
    <p>YOU DON'T WANNA DO THAT {user.user_name.toUpperCase()}</p>
    <img src ="https://data.whicdn.com/images/53606009/original.jpg" alt ="sketch"></img>
    </div>
    <p>
    <button onClick ={deleteThatPerson}>YOU KNOW I DO</button>
    </p>
    <p>
    <button onClick ={loljk}>LOL JK CHILL TAKE ME BACK</button>
    </p>
    </div>
    )
}
export default DeleteProfilePage;
