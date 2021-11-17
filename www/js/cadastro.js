        firebase.initializeApp(firebaseConfig);
        
        var btnCadastrar = document.getElementById('btnInserir');
        var email = document.getElementById('txtEmail');
        var senha = document.getElementById('txtSenha');
        
        btnCadastrar.addEventListener('click', function () {
            firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, senha.value)
            .then(function () {
                alert('Bem vindo' + email.value);
            })
            .catch(function (error) {
                console.error(error.code);
                console.error(error.message);
                alert('Falha ao cadastrar, verifique o erro no console.');
            });
        });


        /*firebase.initializeApp(firebaseConfig);

        const cadastro = document.getElementById('cadastro');

        cadastro.onsubmit = event => {
        event.preventDefault();

        const email = cadastro.querySelector('name=txtEmail').value;
        const senha = cadastro.querySelector('name=txtSenha').value;

        firebase.auth().createUserWithEmailAndaPassword(email, senha)
        .then(() => {
                alert("Usuário cadastrado com sucesso!");
            }).catch((error) => {
                console.log("erro: "+error);
            });
        };*/
        
        
        
        /*let cnome = document.getElementById("txtNome").value;
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
            window.location.href = "principal.html";
        })
        .catch((error) => {
            console.error("Erro ao cadastrar: ", error);
        });*/