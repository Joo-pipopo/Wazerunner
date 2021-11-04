var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);
    },

    inserir: function(){
        let cnome = document.getElementById("txtNome").value;
        let cemail = document.getElementById("txtEmail").value;
        let csenha = document.getElementById("txtSenha").value;

        var db = firebase.firestore();

        db.collection("cadastros").add({
            nome: cnome,
            email: cemail,
            senha: csenha
        })
        .then((docRef) => {
            console.log("ID do cadastro: ", docRef.id);
            window.location.href = "dificuldade.html";
        })
        .catch((error) => {
            console.error("Erro ao cadastrar: ", error);
        });

    }
};
app.initialize();