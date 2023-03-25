document.addEventListener("DOMContentLoaded", () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    const port = 3002;
  
    fetch(`http://localhost:${port}/who`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const personItem = data.find(item => item.id === parseInt(id));
        console.log(personItem);
        const imageElement = document.getElementById("person_image");
        const biographyElement = document.getElementById("container1");

        const firstArticleElement = document.getElementById("container2");
        firstArticleTitle = document.createElement("h1");
        firstArticleTitle.innerHTML = personItem.title1;
        firstArticleElement.appendChild(firstArticleTitle);
        firstArticleText = document.createElement("p");
        firstArticleText.innerHTML = personItem.article1;
        firstArticleElement.appendChild(firstArticleText);


        const secondArticleElement = document.getElementById("container3");
        secondArticleTitle = document.createElement("h1");
        secondArticleTitle.innerHTML = personItem.title2;
        secondArticleElement.appendChild(secondArticleTitle);
        secondArticleText = document.createElement("p");
        secondArticleText.innerHTML = personItem.article2;
        secondArticleElement.appendChild(secondArticleText);


        const thirdArticleElement = document.getElementById("container4");
        thirdArticleTitle = document.createElement("h1");
        thirdArticleTitle.innerHTML = personItem.title3;
        thirdArticleElement.appendChild(thirdArticleTitle);
        thirdArticleText = document.createElement("p");
        thirdArticleText.innerHTML = personItem.article3;
        thirdArticleElement.appendChild(thirdArticleText);



        imageElement.src = personItem.img;
        biographyElement.innerHTML= personItem.biography;
      })
      .catch(error => {
        console.error(error);
      })
    
  });