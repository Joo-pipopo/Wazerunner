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
            alert('Senha e/ou email incorreto(s)');
          }

    }).catch((error) => {
      console.log("error: ", error);
    });
    }  
};

app.initialize();

