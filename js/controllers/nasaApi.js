
const btnForm = document.querySelector("#botao-formulario");
const inputDate = document.querySelector("#data-usuario");
let divConteudo = document.querySelector(".caixa-da-imagem");
let divTitulo = document.querySelector(".caixa-do-titulo");

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
  
  divConteudo.innerHTML = '';
  divTitulo.innerHTML = '';
  let DateNow = Date.now();
  let data = new Date(DateNow)
  let dataFormatada = dateFormat(data);
  

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

    console.log(userData)

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
