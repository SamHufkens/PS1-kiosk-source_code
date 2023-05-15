const timeElem = document.getElementById('time');
const dateElem = document.getElementById('date');
const timeElemSleeping = document.getElementById('time-sleeping');
const dateElemSleeping = document.getElementById('date-sleeping');
const city = document.getElementById('city');
const citySleeping = document.getElementById('city-sleeping');
const temprature = document.getElementById('temp');
const tempratureSleeping = document.getElementById('temp-sleeping');


setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeElem.textContent = timeString;
  timeElemSleeping.textContent = timeString;
}, 1000);

const now = new Date();
const dateString = now.toLocaleDateString();
dateElem.textContent = dateString;
dateElemSleeping.textContent = dateString;

fetch("https://api.openweathermap.org/data/2.5/weather?q=Mol&units=metric&appid=db3bb429649447eaf9739dcd07c57eee")
  .then((res) => res.json()) 
  .then((data) => {
    const {temp} = data["main"];
    const name = data["name"];
    const {icon} = data.weather[0];
    console.log(data)

    city.textContent = name;
    citySleeping.textContent = name;
    tempratureSleeping.textContent = `${temp.toFixed(0)}°C`;
    temprature.textContent = `${temp.toFixed(0)}°C`;
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector('.icon-sleeping').src = "https://openweathermap.org/img/wn/" + icon + ".png"
});
