import { useState } from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Results from "./components/Results/Results";
/*Metodo para definir el estado de las fechas*/
const todayDate = new Date();
const unixTomorrow = todayDate.getTime() + 86400000;
const tomorrowDate = new Date(unixTomorrow);
const year1 = todayDate.getFullYear();
let month1 = todayDate.getMonth() + 1;
let day1 = todayDate.getDate();
const year2 = tomorrowDate.getFullYear();
let month2 = tomorrowDate.getMonth() + 1;
let day2 = tomorrowDate.getDate();
zero();
const today = year1 + "-" + month1 + "-" + day1;
const tomorrow = year2 + "-" + month2 + "-" + day2;

export default function App() {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [country, setCountry] = useState("Todos los paises");
  const [price, setPrice] = useState("Cualquier precio");
  const [size, setSize] = useState("Cualquier tamaño");

  return (
    <div className="principalContainer">
      <Header
        date1={date1}
        date2={date2}
        country={country}
        price={price}
        size={size}
      />
      <Filters
        date1={date1}
        date2={date2}
        country={country}
        price={price}
        size={size}
        setDate1={setDate1}
        setDate2={setDate2}
        setCountry={setCountry}
        setPrice={setPrice}
        setSize={setSize}
      />
      <Results
        today={today}
        tomorrow={tomorrow}
        date1={date1}
        date2={date2}
        country={country}
        price={price}
        size={size}
      />
    </div>
  );
}
/*Funcion para añadir un cero que solo anteceda a los dias o meses de una decena */
function zero() {
  if (day1 < 10) {
    day1 = "0" + day1;
  }
  if (day2 < 10) {
    day2 = "0" + day2;
  }
  if (month1 < 10) {
    month1 = "0" + month1;
  }
  if (month2 < 10) {
    month2 = "0" + month2;
  }
}
