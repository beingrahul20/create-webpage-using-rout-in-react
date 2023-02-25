

function Card(props) {

  return (
    <>
      <div className="card" >
        <img src={props.imgsrc} className="card-img-top" style={{ width: "200px", height: "200px" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title} </h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">{props.demo1}</p>
          <p className="card-text">{props.demo2}</p>
          <p className="card-text">{props.demo3}</p>
          <p className="card-text">{props.demo4}</p>
          <p className="card-text">{props.demo5}</p>
          <p className="card-text">{props.demo6}</p>
          <p className="card-text">{props.demo7}</p>
          <a href="#" className="btn btn-primary">{props.sname}</a>
        </div>
      </div>
    </>
  );
}

export default Card;