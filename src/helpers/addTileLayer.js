import L from "leaflet";

export function addTileLayer(map) {
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidnNoeWxpdWsiLCJhIjoiY2t5bGZ3N29wMzVtajJvcGI5aTJ0ZGh5cSJ9.4BRlHoWWTVnPC8VAl4rf6g",
    {
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "your.mapbox.access.token",
    }
  ).addTo(map);
}
