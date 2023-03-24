window.onload = function() {
  const userButton = document.getElementById("user_button");
  if (localStorage.getItem("isLogged") === "true") {
    userButton.onclick = function() {
      location.href = "profile.html";
    }
  } else {
    userButton.onclick = function() {
      location.href = "sign_in.html";
    }
  }
}
