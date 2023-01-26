import starIcon from "../assets/star.png";
import katiePhoto from "../assets/katie-zaferes.png";

function Card() {
  return (
    <div className="cards">
      <img className="cards--image" src={katiePhoto}></img>
      <div className="cards--box">
        <img className="cards--box--star" src={starIcon}></img>
        <span className="cards--box--rating">5.0</span>
        <span className="cards--box--grey">(6) • </span>
        <span className="cards--box--grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span>/ person
      </p>
    </div>
  );
}

export default Card;
