
const btnForm = document.querySelector("#botao-formulario");
const inputDate = document.querySelector("#data-usuario");
const imgConteudo = document.querySelector("#imagem-conteudo");
const tituloImg = document.querySelector("#titulo-texto");

const apiApod = () => {

    btnForm.addEventListener("click", async (e) => {
    
    e.preventDefault()
    let userData = inputDate.value;
    console.log(userData)
    const url = `https://api.nasa.gov/planetary/apod?api_key=4ukW8vajiJayTXJPeRUysMqWtdXKusT7PtTxx7Xo&thumbs=true&date=${userData}`;

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {

        console.log(res)

        const titulo = res.title;
        tituloImg.innerHTML = titulo; 

        const urlImg = res.url;
        imgConteudo.src = urlImg;
      });
  });

};

document.addEventListener("DOMContentLoaded", () => {
    apiApod()
})
