const Card = (props) => {
    return (
        <div className="noteCard">
            <h4 className="cardName" >{props.name}</h4>
            <p className="cardPath" >{props.path}</p>
            <p className="cardText">{props.text}</p>
        </div>
    )
}

export default Card