function Suggested({suggested}){

    return (
        <div>
            <img src={suggested.thumbnail}/>
            <h3>{suggested.title}</h3>
            <p>{suggested.description}</p>
            <p>{suggested.runtime}</p>
        </div>
    )
}

export default Suggested;