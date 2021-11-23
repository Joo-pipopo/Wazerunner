function desafio() {
    var opcoes = ["CORRER TROTANDO", "CORRER AO MÁXIMO", "CORRER PULANDO", "CORRER FAZENDO COOPER"];
    alert(opcoes[Math.floor(Math.random() * opcoes.length)]);
}

function concluir(){ 
    document.getElementById("confs").style.display = "block";
    /* var r= confirm("Você quer conluir a corrida?");
    if (r==true) {
        window.location = "../ibiraRotas.html";
        alert("Você concluiu uma corrida, parabéns!");
    }
    else{
        alert("Ok, boa sorte na corrida!");
    } */
}