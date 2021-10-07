var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);  
    },

    cadastrar: function () {
        let cmasc = document.getElementById("mascRadio").value;
        let cfem = document.getElementById("femRadio").value;
        let cusuario = document.getElementById("txtUsuario").value;
        let cemail = document.getElementById("txtEmail").value;
        let csenha = document.getElementById("txtSenha").value;
        let ctermos = document.getElementById("checkTermos").value;

        var db = firebase.firestore();

        db.collection("cadastros").add({
            masc: cmasc,
            fem: cfem,
            nome: cusuario,
            email: cemail,
            senha: csenha,
            termos: ctermos
        })
        .then((docRef) => {
            console.log("Documento escrito com ID: ", docRef.id);
            window.location.href = cordova.file.applicationDirectory + "www/cadastro.html";
        })
        .catch((error) =>{
            console.error("Erro ao adicionar o documento: ", error);
        });
    }
};

app.initialize();