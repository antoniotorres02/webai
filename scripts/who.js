let port = 3002;

document.addEventListener("DOMContentLoaded", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const port = 3002;

  fetch(`http://localhost:${port}/who`)
    .then(response => response.json())
    .then(data => {
      appendPersons(data.length);
      data.forEach(newsItem => {
        /*Creación de elementos button y append al contenedor de  fichas de personas*/


        const button = document.querySelector(`[data-id="${newsItem.id}"]`);
        const h1 = button.querySelector('h1');
        button.style.backgroundImage = 'url("' + newsItem.img + '")';
        h1.innerText = newsItem.name;
      });
    })
    .catch(error => {
      console.error(error);
    });
});


function appendPersons(amount) {
  const gridElement = document.getElementById("grid_person");
  for (var id = 1; id <= amount; id++) {
    let newButton = document.createElement("button");
    newButton.className = "person_button";
    newButton.setAttribute("data-id", id);
    newButton.setAttribute("onclick","location.href='person.html?id=" + id + "'");
    newButton.appendChild(document.createElement("h1"));
    console.log(id);
    gridElement.appendChild(newButton);
  }
}