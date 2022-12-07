
const btnForm = document.querySelector("#botao-formulario");
const inputDate = document.querySelector("#data-usuario");
let divConteudo = document.querySelector(".caixa-da-imagem");
let divTitulo = document.querySelector(".caixa-do-titulo");

// Today Setup
let DateNow = Date.now();
let data = new Date(DateNow)
let dataFormatada = dateFormat(data);
let dataPadrao = dateFormatpadrao(data);

//Function Setup
function fetchUrl(data) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=4ukW8vajiJayTXJPeRUysMqWtdXKusT7PtTxx7Xo&thumbs=true&date=${data}`;
  return url;
}

function dateFormatpadrao(data) {
  let dataPadrao = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  return dataPadrao; 
}

function dateFormat(data) {
  let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() ));
  return dataFormatada;
}

// Connection Fetch Setup

const nowDateImg = async () => {
  
  divConteudo.innerHTML = '';
  divTitulo.innerHTML = '';
  
  await fetch(fetchUrl(dataFormatada))
  .then((res) => res.json())
  .then((res) => {

    if (res.media_type == "image") {
            
      let urlImg = res.url;
      let img = document.createElement("img");

      img.src = urlImg;
      img.classList.add("imagem-do-conteudo");
      divConteudo.appendChild(img);

      const titulo = res.title;
      let h1 = document.createElement("h1");

      h1.classList.add("titulo-imagem");
      h1.innerHTML = titulo
      divTitulo.appendChild(h1);
    } else {

    let urlVideo = res.url;
    let object = document.createElement("object");

    object.data = urlVideo;
    object.classList.add("video-conteudo");
    divConteudo.appendChild(object);
    
    const titulo = res.title;
    let h1 = document.createElement("h1");

    h1.classList.add("titulo-imagem");
    h1.innerHTML = titulo
    divTitulo.appendChild(h1);
  }

  });
};

const apiApod = () => {

    btnForm.addEventListener("click", async (e) => {
    
    e.preventDefault();
    divConteudo.innerHTML = '';
    divTitulo.innerHTML = '';
    let userData = inputDate.value;

    await fetch(fetchUrl(userData))
      .then((res) => res.json())
      .then((res) => {

        if (res.media_type == "image") {
            
            let urlImg = res.url;
            let img = document.createElement("img");

            img.src = urlImg;
            img.classList.add("imagem-do-conteudo");
            divConteudo.appendChild(img);

            const titulo = res.title;
            let h1 = document.createElement("h1");

            h1.classList.add("titulo-imagem");
            h1.innerHTML = titulo
            divTitulo.appendChild(h1);

          } else if (res.code == 400) {
            
            let img = document.createElement("img");
            img.src = "../../public/img/sad.png";
            img.classList.add("imagem-de-error");
            divConteudo.appendChild(img);

            let h1 = document.createElement("h1");
            h1.classList.add("titulo-imagem");
            h1.innerHTML = `Data não encontrada.
            <br> Tente digitar uma data entre 16/06/1995 e ${dataPadrao}`;
            divTitulo.appendChild(h1);

          } else {
  
          let urlVideo = res.url;
          let object = document.createElement("object");

          object.data = urlVideo;
          object.classList.add("video-conteudo");
          divConteudo.appendChild(object);
          
          const titulo = res.title;
          let h1 = document.createElement("h1");

          h1.classList.add("titulo-imagem");
          h1.innerHTML = titulo
          divTitulo.appendChild(h1);
        }

      });
  });

};

document.addEventListener("DOMContentLoaded", () => {
    apiApod();
    nowDateImg();
})
