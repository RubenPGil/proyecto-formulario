//Inicializar Firestore a traves de Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCr3IrFqyIJ9qLCF7ijqc5oGh7CXNdOOI0",
    authDomain: "proyecto-inicial-419123.firebaseapp.com",
    projectId: "proyecto-inicial-419123",
    storageBucket: "proyecto-inicial-419123.appspot.com",
    messagingSenderId: "576574458369",
    appId: "1:576574458369:web:5707efcd74775552f30e00"

})

var db = firebase.firestore();

var timestamp = new Date()
