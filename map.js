if (!localStorage.getItem("logged")) {
    window.location.replace("/index.html");
  }
  let center = [25.2841478, 51.4419568];
  let map = L.map("map").setView(center, 12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", 
  {maxZoom: 19,}).addTo(map);
   let icon = L.icon
   ({
      iconUrl: "./Marker.png",
      iconSize: [40, 40],
      iconAnchor: [22, 44],
      popupAnchor: [8, -41],
   }); 
let marker = L.marker(center, { icon: icon }).addTo(map);
const objetoMapa = 
[{
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
  },
  {
   jugador: "Messi",
   coordenada: [-32.9520457, -60.766679],
   ciudad: "Rosario",
  },
  {
  jugador: "Di María",
  coordenada: [-32.9520457, -60.766679],
  ciudad: "Rosario",
  },
  {
  jugador: "Otamendi",
  coordenada: [-34.4718607, -58.6715832],
  ciudad: "El Talar",
  },
  {
  jugador: "Julián Álvarez",
  coordenada: [-31.6679028, -63.2032357],
  ciudad: "Calchín",
  },
  {
  jugador: "Dibu Martínez",
  coordenada: [-38.0174106, -57.6705734],
  ciudad: "Mar del Plata",
  }];
const select = document.querySelector("select");
const opciones = objetoMapa.map((objeto) =>`<option class="select_option_hidden" value="" hidden="">El camino que recorrí...</option> <option>${objeto.jugador}</option>`);
select.innerHTML = opciones.join("");
function changeMap()
{
  const objeto = objetoMapa.find((item) => item.jugador === select.value);
  map.setView(new L.LatLng(...objeto.coordenada), 11);
  marker = L.marker(objeto.coordenada, { icon }).addTo(map);
  marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}
const logoutbttn = document.querySelector("#logoutbttn");
logoutbttn.addEventListener("click", () => {localStorage.removeItem("logged"); window.location.href = "/index.html";});
  