import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { validateIp, addTileLayer } from "./helpers";
import mapIcon from "../images/icon-location.svg"; // картинка иконки точки на карте

// variables
const myButton = document.querySelector(".search-bar__button");
const myInput = document.querySelector(".search-bar__input-value");
let data = []; // dataAboutIPFromServer
const ipInfo = document.querySelector("#ip");
const locationInfo = document.querySelector("#location");
const timezoneInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");

// пакет leaflet карты. инициализация
const mapArea = document.querySelector(".map");
const map = L.map(mapArea).setView([50.4363754, 30.3156307], 13);
addTileLayer(map);
let greenIcon = L.icon({
  iconUrl: mapIcon,
  iconSize: [30, 38], // size of the icon
});
L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);

// eventListeners
myButton.addEventListener("click", handleClick);
myInput.addEventListener("keydown", handleKey);

// functions

function handleKey(e) {
  if (e.key === "Enter") {
    handleClick();
  }
}
function handleClick() {
  const ip = myInput.value;
  myInput.value = "";
  if (validateIp(ip)) {
    getData(ip);
  }
}

// отображение данных на странице
function setData(data) {
  const { ip, isp, location } = data;

  // добавляю значения в .info
  ipInfo.textContent = ip;
  ispInfo.textContent = isp;
  timezoneInfo.textContent = location.timezone;
  locationInfo.textContent = location.region;

  // генерируем новое место на карте
  map.setView([location.lat, location.lng], 13);
  L.marker([location.lat, location.lng], { icon: greenIcon }).addTo(map);
}

// async
// пакет ipify, запрашиваем данные по IP
async function getData(ip) {
  const responce = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_ujcK3gexcZBYuhq49GjnjO9n9gZYJ&ipAddress=${ip}`
  );
  data = await responce.json();
  setData(data);
}
