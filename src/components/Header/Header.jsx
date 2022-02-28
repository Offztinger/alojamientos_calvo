import "./Header.css";

export default function Filters(props) {
  /*Definiendo variables para el manejo del header */
  let textMonth1 = "";
  let textMonth2 = "";
  let textDay1 = "";
  let textDay2 = "";
  const date1 = new Date(props.date1);
  const date2 = new Date(props.date2);
  const year1 = date1.getFullYear();
  let month1 = date1.getMonth();
  let day1 = date1.getDay();
  let numberDay1 = date1.getDate() + 1;
  const year2 = date2.getFullYear();
  let month2 = date2.getMonth();
  let day2 = date2.getDay();
  let numberDay2 = date2.getDate() + 1;

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  /*Se arregla un bug con los dias */
  /*Bug para el mes de febrero*/
  if (numberDay1 === 29 || numberDay2 === 29) {
    /*Bug para los años bisiestos en el mes de febrero*/
    if (year1 % 4 === 0 || year2 % 4 === 0) {
      /*Se le resta un mes al "month" por que se asume que paso el condicional anterior, y requiere restarle una fecha por si
    el año es biciesto */
      if (month1 === 1 && numberDay1 === 29) {
        numberDay1 = 29;
        month1 = 1;
      }

      if (month2 === 1 && numberDay2 === 29) {
        numberDay1 = 29;
        month1 = 1;
      }
    } else {
      if (month1 === 1) {
        numberDay1 = 1;
        month1 = month1 + 1;
      }

      if (month2 === 1) {
        numberDay2 = 1;
        month2 = month2 + 1;
      }
    }
  }

  /*Bug para el mes de Febrero Bisiesto */
  if (month1 === 1 && numberDay1 === 30) {
    numberDay1 = 1;
    month1 = month1 + 1;
  }
  if (month2 === 1 && numberDay2 === 30) {
    numberDay2 = 1;
    month2 = month2 + 1;
  }

  /*Bug para el mes de Abril, Junio, Septiembre y Noviembre*/
  if (numberDay1 === 31) {
    if (month1 === 3 || month1 === 5 || month1 === 8 || month1 === 10) {
      numberDay1 = 1;
      month1 = month1 + 1;
    }
  }

  if (numberDay2 === 31) {
    if (month2 === 3 || month2 === 5 || month2 === 8 || month2 === 10) {
      numberDay2 = 1;
      month2 = month2 + 1;
    }
  }

  /*Bug para los meses de 31 dias*/

  if (numberDay1 === 32) {
    numberDay1 = 1;
    month1 = month1 + 1;
  }
  if (numberDay2 === 32) {
    numberDay2 = 1;
    month2 = month2 + 1;
  }

  /*Se realiza el calculo para determinar que mes es*/

  textMonth1 = months[month1];
  textMonth2 = months[month2];

  /*Se calcula el dia de la semana */
  textDay1 = days[day1];
  textDay2 = days[day2];

  let desde = "";
  /*Se hace la construcción del desde al hasta*/
  if (props.date1 !== "") {
    desde = textDay1 + ", " + numberDay1 + " de " + textMonth1 + " de " + year1;
  }
  let hasta = "";
  if (props.date2 !== "") {
    hasta = textDay2 + ", " + numberDay2 + " de " + textMonth2 + " de " + year2;
  }

  /*Se hace la constucción del resto del mensaje */
  let mensaje = "";
  /*Si hay un pais seleccionado */
  if (props.country !== "Todos los paises") {
    mensaje = mensaje + " en " + props.country;
  }
  /*Si hay un tamaño de habitacion seleccionado */
  if (props.size !== "Cualquier tamaño") {
    if (props.size === "pequeño") {
      mensaje = mensaje + ", de tamaño " + props.size;
    }
    if (props.size === "mediano") {
      mensaje = mensaje + ", de tamaño " + props.size;
    }
    if (props.size === "grande") {
      mensaje = mensaje + ", de tamaño " + props.size;
    }
  }
  /*Si hay un precio seleccionado*/
  if (props.price !== "Cualquier precio") {
    if (props.price === "$") {
      mensaje = mensaje + ", y de un precio economico";
    }
    if (props.price === "$$") {
      mensaje = mensaje + ", y de un precio asequible";
    }
    if (props.price === "$$$") {
      mensaje = mensaje + ", y de un precio elevado";
    }
    if (props.price === "$$$$") {
      mensaje = mensaje + ", y de un precio costoso";
    }
  }
  return (
    <div className="header">
      <div>
        <p className="title">Hoteles</p>
        <p className="content">
          Desde el <strong>{desde}</strong> hasta el <strong>{hasta}</strong>{" "}
          {mensaje}
        </p>
      </div>
    </div>
  );
}
