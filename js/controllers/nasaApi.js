
const btnForm = document.querySelector("#botao-formulario");
const inputDate = document.querySelector("#data-usuario");
let userData = inputDate.value;

const apiApod = () => {

    btnForm.addEventListener("click", async (e) => {
    
    e.preventDefault()
    let userData = inputDate.value;
    console.log(userData)
    const url = `https://api.nasa.gov/planetary/apod?api_key=4ukW8vajiJayTXJPeRUysMqWtdXKusT7PtTxx7Xo&thumbs=true&date=${userData}`;

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {

        const urlImg = res.url;

      });
  });

};

document.addEventListener("DOMContentLoaded", () => {
    apiApod()
})
