function desafio() {
    var opcoes = ["CORRER TROTANDO", "CORRER NO MÁXIMO", "CORRER PULANDO", "CORRER EM COOPER"];
    alert(opcoes[Math.floor(Math.random() * opcoes.length)]);
}

function concluir(){
    var r= confirm("Você quer conluir a corrida?");
    if (r==true) {
        window.location = "../ibiraRotas.html";
        alert("Você concluiu uma corrida, parabéns!");
    }
    else{
        alert("Ok, boa sorte na corrida!");
    }
}

let map;

function initMap() {
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}