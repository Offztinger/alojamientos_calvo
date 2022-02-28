import "./Filters.css";

export default function Filters(props) {
  /*Definiendo eventos*/
  let date1 = 0;
  let date2 = 0;
  let setCountry = (event) => {
    props.setCountry(event.target.value);
  };

  let setPrice = (event) => {
    props.setPrice(event.target.value);
  };

  let setSize = (event) => {
    props.setSize(event.target.value);
  };

  /*DESDE*/
  let setDate1 = (event) => {
    date2 = new Date(props.date2).getTime();
    date1 = new Date(event.target.value).getTime();
    /*Definiendo metodo para evitar que la fecha de partida sea menor a la de regreso */
    if (date2 < date1) {
      alert("La fecha de partida no puede ser menor a la de regreso");
      date1 = date2 - 43200000;
      const yesterdayDate = new Date(date1);
      const year1 = yesterdayDate.getFullYear();
      let month1 = yesterdayDate.getMonth() + 1;
      let day1 = yesterdayDate.getDate();
      /*Condiconales del metodo zero() extraidos de app.js */
      if (day1 < 10) {
        day1 = "0" + day1;
      }
      if (month1 < 10) {
        month1 = "0" + month1;
      }
      const yesterday = year1 + "-" + month1 + "-" + day1;
      props.setDate1(yesterday);
    } else {
      props.setDate1(event.target.value);
    }
  };

  /*HASTA*/
  let setDate2 = (event) => {
    date1 = new Date(props.date1).getTime();
    date2 = new Date(event.target.value).getTime();
    console.log(new Date(date2));
    /*Definiendo metodo para evitar que la fecha de regreso sea menor a la de partidas */
    if (date1 > date2) {
      alert("La fecha de regreso no puede ser menor a la de partida");
      date2 = date1 + 172800000;
      const tomorrowDate = new Date(date2);

      const year2 = tomorrowDate.getFullYear();
      let month2 = tomorrowDate.getMonth() + 1;
      let day2 = tomorrowDate.getDate();
      /*Condiconales del metodo zero() extraidos de app.js */
      if (day2 < 10) {
        day2 = "0" + day2;
      }
      if (month2 < 10) {
        month2 = "0" + month2;
      }
      const tomorrow = year2 + "-" + month2 + "-" + day2;
      props.setDate2(tomorrow);
    } else {
      props.setDate2(event.target.value);
    }
  };

  /*Definiendo el boton que limpia los filtros*/
  const limpiar = () => {
    props.setCountry("Todos los paises");
    props.setPrice("Cualquier precio");
    props.setSize("Cualquier tamaño");
    props.setDate1("");
    props.setDate2("");
  };

  return (
    <div className="filters">
      <div>
        <input
          value={props.date1}
          onChange={setDate1}
          type="date"
          name=""
          id=""
        />
        <input
          value={props.date2}
          onChange={setDate2}
          type="date"
          name=""
          id=""
        />
        <select value={props.country} onChange={setCountry} name="" id="">
          <option value="Todos los paises">Todos los paises</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
        <select value={props.price} onChange={setPrice} name="" id="a">
          <option value="Cualquier precio">Cualquier precio</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        <select value={props.size} onChange={setSize} name="" id="a">
          <option value="Cualquier tamaño">Cualquier tamaño</option>
          <option value="pequeño">Hotel pequeño</option>
          <option value="mediano">Hotel mediano</option>
          <option value="grande">Hotel grande</option>
        </select>
        <button onClick={limpiar} className="clean">
          Limpiar
        </button>
      </div>
    </div>
  );
}
