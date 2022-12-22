if(localStorage.getItem('logged')=== 'true'){
  window.location.href = '/map.html';
}
const credenciales = {
  email: "estudiante@guayerd.com",
  password: "123456",
}
 
  let form = document.querySelector("form")
  console.log(form)
  form.addEventListener("submit", (event) => {

      event.preventDefault()
      

  let userEmail = form.elements.email.value;
  let userPasword = form.elements.password.value;
  console.log(userEmail)
  if (credenciales.email === userEmail && credenciales.password === userPasword)
  {
      localStorage.setItem("logged", "true");
      window.location.href = "map.html";
  }
  else {
      alert("las credenciales no son validas")
  }
  })    