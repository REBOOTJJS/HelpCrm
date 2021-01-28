 //pq npm comunica front con backend postman del frontend **
 console.log(localStorage.getItem('token'))
 axios
 .get('http://localhost:3000/api/accounts', { headers: { token: localStorage.getItem('token')}})
 .then(response => {
  console.log(response.data) // para ver lo que llega
  const cuentas = document.getElementById('cuentas');
   response.data.forEach(cuenta => {
     const newCuenta = document.createElement('li')
     newCuenta.innerHTML = `${cuenta.nombre} - ${cuenta.categoria} - ${cuenta.telefono}` ;
     cuentas.appendChild(newCuenta)
 })

})
  .catch(error => {
    console.log();
  })

//ver **
 document.getElementById('logout').addEventListener("click", function() {
   localStorage.clear();
   window.location.reload()
 })
