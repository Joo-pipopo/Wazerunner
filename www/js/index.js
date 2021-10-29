document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
      location.replace("dificuldade.html")
  }
})

function login(){
  const email = document.getElementById("txtEmail").value
  const senha = document.getElementById("txtSenha").value
  firebase.auth().signInWithEmailAndPassword(email, senha)
  .catch((error)=>{
      document.getElementById("erro").innerHTML = error.message
  })
}