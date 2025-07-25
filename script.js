const c = document.querySelector(".city")
let city = c.value
const btn = document.querySelector(".btn")
let temperature = 0
let country = "none"
let wind = "none"
let humaditiy = "none";
let localtime = "none";
let pressure = "none";

let region = "none"
// const apiKey = "548f6b28352174a097c7f2c3726aa542";


// let temp;
async function fetchData() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1fb8efbbc9204388948164935252407&q=${city}&aqi=no`);
    const data = await response.json();
    city = data.location.name
    temperature = data.current.temp_c;
    country = data.location.country
    region = data.location.region
    wind = data.current.wind_kph
    humaditiy = data.current.humidity
    localtime = data.location.localtime
    pressure = data.current.pressure_in
    console.log(temperature)

    const tempElement = document.querySelector(".tempInfo")
    tempElement.innerHTML = `
<h2>${city}</h2>
<h1>${temperature}°</h1>
 <h3>country : ${country}</h3>
 <h3>region : ${region}</h3>
 <h3>wind speed : ${wind}</h3>
 <h3>humaditiy : ${humaditiy}</h3>
 <h3>localtime : ${localtime}</h3>
 <h3>pressure : ${pressure}</h3>
`
  } catch (error) {
    console.error(error);
  }
}
fetchData();
btn.addEventListener("click", () => {
  city = c.value
  fetchData();



})





