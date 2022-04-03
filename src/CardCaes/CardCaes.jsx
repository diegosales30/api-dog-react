import "./CardCaes.css";

const CardCaes = ({ dog }) => {
  return (
    <figure className="card-caes">
      <img src={dog} alt="" />
    </figure>
  );
};

export default CardCaes;
