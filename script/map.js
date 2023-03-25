//On ajoute la map sur le DOM avec les paramètres voulus.
let mymap = L.map("mapid").setView([43.67734964920557, 4.631217420101167], 13);
let tokenLeaflet = config.LEAFLET;
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    //Token leaflet
    accessToken: tokenLeaflet,
  }
).addTo(mymap);

//Fonction pour centrer la map à la position initiale.
const centerMap = () => {
  //la méthode flyTo permet de reset la position et le zoom.
  mymap = mymap.flyTo(new L.LatLng(43.67734964920557, 4.631217420101167), 13);
};

//On récupère le bouton localisation qui permet de reset la position de la map.
let button_reset = document.querySelector("#localisation_button");

//Listener au clique du bouton localisation qui lance la fonction certerMap.
button_reset.addEventListener("click", centerMap);
