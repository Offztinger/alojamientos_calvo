import "./Hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function Hotel(props) {
  /*Definiendo metodo para los simobolos de dolar según la variable "hotelsValue que es igual a la propiedad que contiene el valor del hotel, 
  esto genera las keys correspondientes (para evitar warning en consola), define el color blanco solo para los dolares correspondientes, y 
  genera una condición para llenar los dolares restantes.*/
  let hotelValue = props.price;
  let fourDollar = [];
  for (let i = 0; i < hotelValue; i++) {
    fourDollar.push(
      <FontAwesomeIcon icon={faDollarSign} style={{ color: "white" }} key={i} />
    );
  }
  if (hotelValue < 4) {
    for (let i = hotelValue; i < 4; i++) {
      console.log();
      fourDollar.push(<FontAwesomeIcon icon={faDollarSign} key={i} />);
    }
  }
  /*Return del componente hotel */
  return (
    <div className="cardContainer">
      <img className="image" src={props.img} alt={props.alt} />
      <div className="cardContent">
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>

        <div className="country">
          <div className="pinContainer">
            <img className="pin" src="/images/pin.png" alt="location" />
          </div>
          <p className="textCountry">{props.city + ", " + props.country}</p>
        </div>

        <div className="hotelDetails">
          <div className="size">
            <div className="bedContainer">
              <img className="bed" src="/images/bed.png" alt="bed" />
            </div>
            <p className="textSize">{props.size} Habitaciones</p>
          </div>
          <div className="price">{fourDollar}</div>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="button">Reservar</button>
      </div>
    </div>
  );
}
