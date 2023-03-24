window.addEventListener("load", function() {
    const welcomeMessage = localStorage.getItem("welcomeMessage");
    if (welcomeMessage) {
      const welcomeElement = document.createElement("p");
      welcomeElement.textContent = welcomeMessage;
      document.body.appendChild(welcomeElement);
      setTimeout(function() {
        localStorage.removeItem("welcomeMessage");
        document.body.removeChild(welcomeElement);
      }, 5000);
    }
  });