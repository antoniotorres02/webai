const welcomeButton = document.getElementById("welcome_button");
const welcomeMessage = document.getElementById("welcome_message");
const errorMessage = document.getElementById("error_message");
welcomeButton.addEventListener("click", (event) => {
  event.preventDefault(); 
  const username = document.getElementById("user_input").value;
  const password = document.getElementById("password_input").value;
  const url = "http://localhost:3002/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const user = data.find((u) => u.username === username && u.password === password);
      if (user) {
        errorMessage.textContent = "";
        welcomeMessage.textContent = `¡Bienvenido, ${username}!`;
        welcomeMessage.classList.add("fadeout");
        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);
      } else {
        errorMessage.textContent = "Nombre de usuario o contraseña incorrectos";
      }
    })
    .catch((error) => console.error(error));
});
