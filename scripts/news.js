let port = 3002;

document.addEventListener("DOMContentLoaded", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const port = 3002;

  /*Carga de las noticias en la página de noticias*/
  fetch(`http://localhost:${port}/news`)
    .then(response => response.json())
    .then(data => {
      data.forEach(newsItem => {
        const button = document.querySelector(`[data-id="${newsItem.id}"]`);
        const h1 = button.querySelector('h1');
        const img = button.querySelector('img');
        img.src = newsItem.img;
        h1.innerText = newsItem.title;
      });
    })
    .catch(error => {
      console.error(error);
    });
});
