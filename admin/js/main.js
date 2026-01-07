alert("JS carregado");
const botaoAutor = document.getElementById('botaoAutor');
const elAutor = document.getElementById('autor');
const elApi = document.getElementById('api');
const elBd = document.getElementById('bd');

botaoAutor.addEventListener('click', pegarInformacao);

const urlBase = "https://back-end-tf-web-ten.vercel.app";

async function pegarInformacao() {

  elAutor.innerText = "Aguarde... "

  try {
    const response = await fetch(urlBase);

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    elAutor.innerHTML = `<strong>Autor:</strong> ${data.author}`;
    elApi.innerHTML = `<strong>API:</strong> ${data.message}`;
    elBd.innerHTML = `<strong>Banco de Dados:</strong> ${data.dbStatus}`;

  } catch (error) {
    console.error("Erro:", error);
    elAutor.innerText = `Erro: ${error}`;
  }
}
