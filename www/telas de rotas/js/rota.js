function desafio() {
  var opcoes = ["CORRER TROTANDO", "CORRER AO MÁXIMO", "CORRER PULANDO", "CORRER FAZENDO COOPER"];
  alert(opcoes[Math.floor(Math.random() * opcoes.length)]);
}

function concluir() {
  document.getElementById("alert-concluir").style.display = "block";
  document.getElementById("local").style.display = "none";
  document.getElementById("desafio").style.display = "none";
  document.getElementById("concluir").style.display = "none";
}

let map;
let long;
let lat;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 18,
  });

  infoWindow = new google.maps.InfoWindow();
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent("Location found.");
      infoWindow.open(map);
      map.setCenter(pos);
    },
    () => {
      handleLocationError(true, infoWindow, map.getCenter());
    }
  );
}

function api() {
  document.getElementById("map").style.display = "block";
  document.getElementById("voltar").style.display = "block";
}

function voltar() {
  document.getElementById("map").style.display = "none";
  document.getElementById("voltar").style.display = "none";
  document.getElementById("alert-concluir").style.display = "none";

  document.getElementById("local").style.display = "block";
  document.getElementById("desafio").style.display = "block";
  document.getElementById("concluir").style.display = "block";
}