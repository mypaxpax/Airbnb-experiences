function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="cards">
      {badgeText && <div className="cards--badge">{badgeText}</div>}
      <img
        className="cards--image"
        src={`../src/assets/${props.item.coverImg}`}
      ></img>
      <div className="cards--box">
        <img className="cards--box--star" src="./src/assets/star.png"></img>
        <span className="cards--box--rating">{props.item.stats.rating}</span>
        <span className="cards--box--grey">
          ({props.item.stats.reviewCount}) •{" "}
        </span>
        <span className="cards--box--grey">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From {props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
