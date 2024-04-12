function guardar(){
    db.collection("usuario").add({
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        Qr: document.getElementById('qr').value,
        timestamp: firebase.firestore.Timestamp.fromDate(timestamp)

        
          
    })
    .then((docRef) => {
        alert('Registro exitoso')
    })
    .catch((error) => {
        alert('Error en el registro')
    });
}



