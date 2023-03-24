document.getElementById("join-button").addEventListener("click", function(event) {
    event.preventDefault(); 
    const formData = new FormData(document.querySelector('form[name="signup-form"]')); 
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }
    const newUser = {
        "username": username,
        "email": email,
        "password": password
    };
    fetch("http://localhost:3002/users")
        .then(response => response.json())
        .then(users => {
            const existingUser = users.find(user => user.username === newUser.username || user.email === newUser.email);
            if (existingUser) {
                alert("El usuario o email ya existe.");
            } else {
                fetch("http://localhost:3002/users", { 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                .then(response => {                    
                    window.location.href = "index.html";
                })
                .catch(error => console.error(error)); 
            }
        })
        .catch(error => console.error(error));
});

