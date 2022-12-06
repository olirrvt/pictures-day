
const btnForm = document.querySelector("#botao-formulario");
const inputDate = document.querySelector("#data-usuario");
const imgConteudo = document.querySelector("#imagem-conteudo");
const tituloImg = document.querySelector("#titulo-texto");

function fetchUrl(data) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=4ukW8vajiJayTXJPeRUysMqWtdXKusT7PtTxx7Xo&thumbs=true&date=${data}`;
  return url;
}

function dateFormat(data) {
  let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() ));
  return dataFormatada;
}

// Connection Fetch

const nowDateImg = async () => {
  
  let DateNow = Date.now();
  let data = new Date(DateNow)
  let dataFormatada = dateFormat(data);
  

  await fetch(fetchUrl(dataFormatada))
  .then((res) => res.json())
  .then((res) => {

    const titulo = res.title;
    tituloImg.innerHTML = titulo; 

    const urlImg = res.url;
    imgConteudo.src = urlImg;

  });
};

const apiApod = () => {

    btnForm.addEventListener("click", async (e) => {
    
    e.preventDefault()
    let userData = inputDate.value;
    console.log(userData)

    await fetch(fetchUrl(userData))
      .then((res) => res.json())
      .then((res) => {

        console.log(res)

        if (res.media_type == "image") {

            let urlImg = res.url;

            let divImagem = document.querySelector(".caixa-da-imagem");
            let img = document.createElement("img");

            img.src = urlImg
            img.classList.add("imagem-do-conteudo");
            divImagem.appendChild(img);

            const titulo = res.title;

            let divTitulo = document.querySelector(".caixa-do-titulo");
            let h1 = document.createElement("h1");

            h1.classList.add("titulo-imagem");
            h1.innerHTML = titulo
            divTitulo.appendChild(h1);
  
        } else {
          console.log("É um vídeo!")
        }
      });
  });

};

document.addEventListener("DOMContentLoaded", () => {
    apiApod();
    nowDateImg();
})
