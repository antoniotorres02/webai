document.getElementById("join-button").addEventListener("click", function(event) {
    event.preventDefault(); 

    const formData = new FormData(document.querySelector('form[name="signup-form"]')); 

    const newUser = {
        "username": formData.get("username"),
        "email": formData.get("email"),
        "password": formData.get("password")
    };

    fetch("http://localhost:3002/users")
        .then(response => response.json())
        .then(users => {
            const existingUser = users.find(user => user.username === newUser.username || user.email === newUser.email);
            if (existingUser) {
                alert("El usuario o email ya existe.");
            } else {
                // Enviar solicitud POST para crear el nuevo usuario
                fetch("http://localhost:3002/users", { 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                .then(response => {
                    // Almacenar mensaje de bienvenida en localStorage
                    const welcomeMessage = `Bienvenido, ${newUser.username}!`;
                    localStorage.setItem("welcomeMessage", welcomeMessage);

                    // Redirigir al usuario a la página de inicio
                    window.location.href = "index.html";
                })
                .catch(error => console.error(error));
            }
        })
        .catch(error => console.error(error));
});


