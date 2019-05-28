
  var config = {
    apiKey: "AIzaSyDHb0aiIbbSk48-hoeOekbD_574DD7HnF4",
    authDomain: "burgerqueen-ed43f.firebaseapp.com",
    databaseURL:"https://burgerqueen-ed43f.firebaseio.com",
    projectId: "burgerqueen-ed43f",
    storageBucket: "burgerqueen-ed43f.appspot.com",
    messagingSenderId: "679815418776",
    appId: "1:679815418776:web:bde0fe8d94525635"
  };
  firebase.initializeApp(config);
  //constantes
  const pedidos = document.getElementById("pedidos");
  var db = firebase.firestore();

  //.orderBy('date', 'desc')
  //firebase.firestore.FieldValue.serverTimestamp()
 
  const printOrders = ()=>{
  db.collection("ordenes").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let nameCliente = doc.data().nombre;
        doc.data().pedido.forEach(element => {
             let nameProduct = element.nombre;
             let valorProduct = element.valor;
             let cantidad = element.cantidad;
            console.log(nameProduct, valorProduct);
            let comandas= `<div>
            <p> Cliente: ${nameCliente}</p>
            <p>${nameProduct}</p>
            <p>${valorProduct}</p>
            <p>${cantidad}</p>
            </div>`
        pedidos.insertAdjacentHTML('beforeend', comandas);
        })
        
    })
  });
}
printOrders();

// window.addEventListener('load', printOrders);