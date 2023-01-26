function Card(props) {
  return (
    <div className="cards">
      <img className="cards--image" src={`../src/assets/${props.image}`}></img>
      <div className="cards--box">
        <img className="cards--box--star" src="./src/assets/star.png"></img>
        <span className="cards--box--rating">{props.rating}</span>
        <span className="cards--box--grey">({props.numOfRatings}) • </span>
        <span className="cards--box--grey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p className="card-price">
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
