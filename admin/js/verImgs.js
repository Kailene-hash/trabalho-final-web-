const urlBase = "https://back-end-tf-web-ten.vercel.app";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.getElementById("id").value = "Carregando...";

(async () => {
  try {
    const endpoint = `/imagens/${id}`;
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal);

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();

    document.getElementById("id").value = data[0].id;
    document.getElementById("imagem").value = data[0].link_imagem; // ← CORRIGIDO

  } catch (error) {
    document.getElementById("id").value = `Erro na requisição: ${error}`;
  }
})();