document.getElementById("btnLogar").addEventListener("click", logar);

function logar() {
    var email = document.getElementById("txtEmail").value;
    var senha = document.getElementById("txtSenha").value;
    
    var db = firebase.firestore();
    var col = db.collection("cadastros").where("email", "==", email, "&&", "senha", "==", senha);

    col.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
        }).catch((error) => {
                console.error("error: ", error);
            });
    });

    /*firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href="dificuldade.html";
  })
  .catch((error) => { 
    var errorMessage = error.message;
    alert("Ocorreu um erro: "+errorMessage);
  });*/
}