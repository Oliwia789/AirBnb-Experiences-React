import star from "../assets/Star 1.png"


function Card(props) {
    let badgeText;
    if(props.isSoldOut) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <img src={`../images/${props.coverImg}`} alt="" className="photo"></img>
            { badgeText && <span className="sold-out">{badgeText}</span>}
            <div><img src={star} alt="red star"></img> {props.stats.rating} <span className="light">({props.stats.reviewCount}) . {props.location}</span></div>
            <p className="card-desc">{props.title}</p>
            <span><strong>From {props.price}$</strong> / person</span>
        </div>
    )
}

export default Card