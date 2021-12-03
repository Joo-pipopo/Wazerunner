var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnLogar").addEventListener("click",app.logar);  
    },

    logar: function(){
      var email = document.getElementById("txtEmail").value;
      var senha = document.getElementById("txtSenha").value;
      var alertErro = document.getElementById("alert-erro");

      alertErro.style.display='none';

      var db = firebase.firestore();
      var col = db.collection("cadastros").where("email", "==", email).where("senha", "==", senha);  
      
      col.get().then((querySnapshot) => {
        var contagem = 0;
        querySnapshot.forEach((doc) => { 
          console.log(doc.data());
          contagem++;
          });

          if (contagem == 1) {
            window.location = 'principal.html';
          } else {
            alertErro.style.display='block';
          }

    }).catch((error) => {
      console.log("error: ", error);
    });
    }  
};

app.initialize();

