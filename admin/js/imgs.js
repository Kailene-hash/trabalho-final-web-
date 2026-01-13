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
              <td>${imagem.link_imagem}</td>
              <td>
                <a class="botao inserir" href="adminport.html?id=${imagem.id}">Ver</a>
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
    try {
      const endpoint = `/imagens/${id}`;
      const urlFinal = urlBase + endpoint;

      const response = await fetch(urlFinal, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      alert("Imagem excluída com sucesso!");
      window.location.reload(); // Recarrega a página atual
    } catch (error) {
      alert("Imagem não foi excluída!");
      console.error(error);
    }
  }
})();