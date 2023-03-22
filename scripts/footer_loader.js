function loadTemplate(fileName, id, callback) {

    fetch(fileName).then((res) => {
        return res.text();
    }).then((text) => {
        document.getElementsByTagName(id)[0].innerHTML = text;
        console.log(text)
        if(callback){
            callback();
        }
    })
}

loadTemplate("components/footer.html", "footer");