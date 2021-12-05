var app = {

    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function () {
        document.getElementById("btnCadastrar").addEventListener("click", app.cadastrar);
    },

    cadastrar: function () {
        var db = firebase.firestore();

        let cnome = document.getElementById('txtNome').value;
        let cemail = document.getElementById('txtEmail').value;
        let csenha = document.getElementById('txtSenha').value;

        var col = db.collection("cadastros").where("email", "==", cemail)
        var col2 = db.collection("cadastros").where("nome", "==", cnome);

        
        
        col.get().then((querySnapshot) => {
            var contagem = 0;
            querySnapshot.forEach((doc) => {
                contagem++;
            });

            if (contagem >= 1) {
                document.getElementById('alert-email').style.display= "block";
            } else {
                col2.get().then((q) => {
                    var contagem2 = 0;
                    q.forEach((doc) => {
                        contagem2++;
                    });

                    if (contagem2 >= 1) {
                        document.getElementById('alert-nome').style.display= "block";
                    } else {
                        db.collection("cadastros").add({
                            nome: cnome,
                            email: cemail,
                            senha: csenha
                        }).then((docRef) => {
                            console.log("Document written with ID: ", docRef.id);
                            window.location = "principal.html";
                        }).catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                    }

                });
            }

        }).catch((error) => {
            console.log("error: ", error);
        });

    }
};

app.initialize();