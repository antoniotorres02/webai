let port = 3002;

document.addEventListener("DOMContentLoaded", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  fetch("http://localhost:" + port + "/news")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const newsItem = data.find(item => item.id === parseInt(id));
      const titleElement = document.getElementById("news_title");
      const contentElement = document.getElementById("news_content");
      titleElement.innerText = newsItem.title;
      contentElement.innerText = newsItem.content;
    })
    .catch(error => {
      console.error(error);
    });
});

fetch("http://localhost:" + port + "/news")
  .then(response => response.json())
  .then(data => {
    // Iteramos sobre cada objeto del JSON
    data.forEach(newsItem => {
      // Obtenemos el botón correspondiente por su data-id
      const button = document.querySelector(`[data-id="${newsItem.id}"]`);
      // Obtenemos la etiqueta h1 del botón
      const h1 = button.querySelector('h1');
      // Asignamos el título del objeto JSON a la etiqueta h1
      h1.innerText = newsItem.title;
    });
  });