
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.addEventListener("DOMContentLoaded", function () {

// Criar o mapa 
var map = L.map('map', {
  center: [-22.1256, -51.3925], // Coordenadas do centro de Presidente Prudente
  zoom: 13,  
});


  // Adicionar os tiles do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Ícone personalizado para o ponto de coleta
  var pointIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png', // Ícone de ponto
    iconSize: [32, 32],  // Tamanho do ícone
    iconAnchor: [16, 32], // Posição da âncora do ícone
    popupAnchor: [0, -32] // Posição do popup em relação ao ícone
  });

  // Adicionar um marcador no SENAI
  L.marker([-22.1206, -51.4059], { icon: pointIcon }).addTo(map)
    .bindPopup("📍 Ponto de Coleta - SENAI Presidente Prudente");
});

document.getElementById("map-container").addEventListener("click", function () {
  let mapDiv = document.getElementById("map");
  let container = document.getElementById("map-container");

  if (!container.classList.contains("expanded")) {
      // Expandindo o mapa
      container.classList.add("expanded");
      container.style.position = "fixed";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100vw";
      container.style.height = "100vh";
      container.style.zIndex = "9999";
      mapDiv.style.borderRadius = "0"; // Removendo o border-radius ao expandir
  } else {
      // Revertendo a expansão
      container.classList.remove("expanded");
      container.style.position = "relative";
      container.style.width = "100%";
      container.style.height = "400px";
      mapDiv.style.borderRadius = "10%"; // Restaurando o border-radius
  }
});
