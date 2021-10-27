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
            console.log("Document written with ID: ", docRef.id);
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }  
};

app.initialize();