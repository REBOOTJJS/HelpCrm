  //pq npm comunica front con backend postman del frontend **
axios
  .get('http://localhost:3000/api/accounts', { headers: { token: localStorage.getItem('token')}})
  .then(response => {
    const cuentas = document.getElementById('cuentas');
    response.data.forEach(cuenta => {
      const newCuenta = document.createElement('li')
      newCuenta.innerHTML = cuenta.nombre;
      cuentas.appendChild(newCuenta)

  })
//ver **
  document.getElementById('logout').addEventListener("click", function() {
    localStorage.clear();
    window.location.reload()
  })


