import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    window.alert("logado")
    // ...
  } else {
    // User is signed out
    window.alert("deslogado")
  }
});

function login(){
    var usuEmail = document.getElementById("txtEmail").value;
    var usuSenha = document.getElementById("txtSenha").value;

}