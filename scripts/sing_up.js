document.getElementById("join-button").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que se recargue la página al hacer clic en el botón

    const formData = new FormData(document.querySelector('form[name="signup-form"]')); // Crea un objeto FormData con los datos del formulario

    fetch("http://localhost:3002/users", { // Envía una solicitud POST a la dirección del servidor
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
