function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`}/>
      <div className="card--stats">
        <img src="../images/star.png" className="card--star"/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) • </span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">{props.price}</span> / person</p>
    </div>
  );
}

export default Card;
