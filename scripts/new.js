let port = 3002;

document.addEventListener("DOMContentLoaded", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const port = 3002;

  fetch(`http://localhost:${port}/news`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const newsItem = data.find(item => item.id === parseInt(id));
      const titleElement = document.getElementById("news_title");
      const contentElement = document.getElementById("news_content");
      const imgElement = document.getElementById("news_img");
      imgElement.src = newsItem.img;
      titleElement.innerText = newsItem.title;
      contentElement.innerText = newsItem.content;
    })
    .catch(error => {
      console.error(error);
    })
});