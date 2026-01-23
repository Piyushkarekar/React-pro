import "./Card.css";
export const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src={props.img}
          alt={props.name}
        />

        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <p>{props.city}</p>
      </div>
    </div>
  );
};
