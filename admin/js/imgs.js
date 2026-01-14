const urlBase = "https://back-end-tf-web-ten.vercel.app";
const tabelaCorpo = document.getElementById("tabela-corpo");
tabelaCorpo.innerHTML = "Aguarde...";

(async () => {
  try {
    const endpoint = "/imagens";
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal);

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    tabelaCorpo.innerHTML = "";

    data.forEach((imagem) => {
      const linha = document.createElement("tr"); 
      
      linha.innerHTML = `
              <td>${imagem.id}</td>
              <td><img src="${imagem.link_imagem}" alt="Imagem" style="max-width: 100px; border-radius: 5px;"></td>
              <td>
                <a class="botao excluir" data-id="${imagem.id}">Excluir</a>
              </td>
      `;
      tabelaCorpo.appendChild(linha); 
    });
  } catch (error) {
    tabelaCorpo.innerHTML = `Erro na requisição: ${error}`;
  }

  tabelaCorpo.addEventListener("click", acao);

  function acao(e) {
    e.preventDefault();
    if (e.target.classList.contains("excluir")) {
      const id = e.target.getAttribute("data-id");
      excluirImagem(id);
    }
  }

  async function excluirImagem(id) {
    if (!confirm("Tem certeza que deseja excluir esta imagem?")) {
      return;
    }

    try {
      const endpoint = `/imagens/${id}`;
      const urlFinal = urlBase + endpoint;

      const response = await fetch(urlFinal, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      alert("Imagem excluída com sucesso!");
      window.location.reload();
    } catch (error) {
      alert("Erro ao excluir imagem: " + error.message);
      console.error(error);
    }
  }
})();