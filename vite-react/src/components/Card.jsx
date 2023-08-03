function Card() {
  return (
    <div className="card">
      <img src="../images/card-image.png" className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star"/>
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}

export default Card;
