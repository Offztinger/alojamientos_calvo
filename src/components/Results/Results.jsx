import "./Results.css";
import Hotel from "./components/Hotel";
import { hotelsData } from "../../data";

export default function Results(props) {
  /*Definiendo el metodo para filtrar los hoteles según los input y select */
  const filtrarLista = () => {
    let nuevaLista = hotelsData;
    /*Condicional para las fechas*/
    if (props.date1 !== "" && props.date2 !== "") {
      nuevaLista = nuevaLista.map((hotel) => {
        let dateFromUNIX = new Date(hotel.availabilityFrom).setHours(
          0,
          0,
          0,
          0
        );
        let dateToUNIX = new Date(hotel.availabilityTo).setHours(0, 0, 0, 0);
        return {
          slug: hotel.slug,
          name: hotel.name,
          photo: hotel.photo,
          description: hotel.description,
          availabilityFrom: dateFromUNIX,
          availabilityTo: dateToUNIX,
          rooms: hotel.rooms,
          city: hotel.city,
          country: hotel.country,
          price: hotel.price
        };
      });
      let date1UNIX = new Date(props.date1).getTime() + 21600000;
      let date2UNIX = new Date(props.date2).getTime() + 21600000;
      date1UNIX = new Date(date1UNIX).setHours(0, 0, 0, 0);
      date2UNIX = new Date(date2UNIX).setHours(0, 0, 0, 0);
      nuevaLista = nuevaLista.filter(
        (hotel) =>
          date1UNIX >= hotel.availabilityFrom &&
          date2UNIX <= hotel.availabilityTo
      );
    }
    /*Condicional para el select de paises*/
    if (props.country !== "Todos los paises") {
      nuevaLista = nuevaLista.filter(
        (hotel) => hotel.country === props.country
      );
    }
    /*Condicional para el select de precio*/
    if (props.price !== "Cualquier precio") {
      if (props.price === "$") {
        nuevaLista = nuevaLista.filter((hotel) => hotel.price === 1);
      }
      if (props.price === "$$") {
        nuevaLista = nuevaLista.filter((hotel) => hotel.price === 2);
      }
      if (props.price === "$$$") {
        nuevaLista = nuevaLista.filter((hotel) => hotel.price === 3);
      }
      if (props.price === "$$$$") {
        nuevaLista = nuevaLista.filter((hotel) => hotel.price === 4);
      }
    }
    /*Condicional para el select de tamaño*/
    if (props.size !== "Cualquier tamaño") {
      if (props.size === "pequeño") {
        nuevaLista = nuevaLista.filter((hotel) => hotel.rooms <= 10);
      }
      if (props.size === "mediano") {
        nuevaLista = nuevaLista.filter(
          (hotel) => hotel.rooms >= 10 && hotel.rooms < 20
        );
      }
      if (props.size === "grande") {
        nuevaLista = nuevaLista.filter(
          (hotel) => hotel.rooms >= 20 && hotel.rooms < 50
        );
      }
    }
    return nuevaLista;
  };

  /*Se define una lista antes del return para poder iterar con ella.*/
  let listaFiltrada = filtrarLista();
  return (
    <div className="contenedorResults">
      {listaFiltrada.length > 0 ? (
        listaFiltrada.map((element, index) => {
          return (
            <div key={index}>
              <Hotel
                img={element.photo}
                alt={element.slug}
                title={element.name}
                description={element.description}
                city={element.city}
                country={element.country}
                size={element.rooms}
                price={element.price}
                availabilityFrom={element.availabilityFrom}
                availabilityTo={element.availabilityTo}
              />
            </div>
          );
        })
      ) : (
        <img className="error404" src="/images/error.png" alt="error" />
      )}
    </div>
  );
}
