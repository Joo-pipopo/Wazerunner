document.getElementById("btnLogar").addEventListener("click", logar);

function logar() {
    var auth = firebase.auth();
    firebase.auth().onAuthStateChanged(function (user) {

    // Lay connection with the database.
    var firestore = firebase.firestore();
    var db = firestore.collection('cadastros').doc(user.uid);

    // Get the user data from the database.
    db.get().then(function (db) {
        // Catch error if exists. 
        alert("logado");
        promise.catch(function (error) {
            // Return error
            alert("Ocorreu um erro, "+error);
        });

        promise.then(function () {
            // continue when success
        });
    });
});
}