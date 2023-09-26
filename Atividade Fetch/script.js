const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");
const lista = document.getElementById("listaPessoas");

const exibirLista = (lista) => {
    listaPessoas.innerHTML = "";
    for (let i = 0; i < lista.length; ++i) {
      const li = document.createElement("li");
      const text = document.createTextNode(
        `${lista[i].name} (${lista[i].birth_year}) (${lista[i].height} cm)`
      );
      li.appendChild(text);
      listaPessoas.appendChild(li);
    }
  };
  
  const configurarBotoes = (data) => {
    const { previous, next } = data;
  
    btAnterior.disabled = previous === null;
    btAnterior.onclick = () => {
      fetchAPI(previous);
      btAnterior.disabled = true;
    };
  
    btProxima.disabled = next === null;
    btProxima.onclick = () => {
      fetchAPI(next);
      btProxima.disabled = true;
    };
  };
  
  const fetchAPI = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        exibirLista(data.results);
        configurarBotoes(data);
      });
  };

  function extrairNumeroDaPagina(url) {
    let page = url.toString();
    const splitted = page.split("=");
    if(splitted.length===2){
      const numeroDaPagina = parseInt(splitted[1]);
      if(!isNaN(numeroDaPagina))return numeroDaPagina;
    }
    return null;
  }


  
  fetchAPI("https://swapi.dev/api/people/?page=1");

