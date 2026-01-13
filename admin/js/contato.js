const urlBase = "https://back-end-tf-web-ten.vercel.app";
const tabelaCorpo = document.getElementById("tabela-corpo");
tabelaCorpo.innerHTML = "Aguarde...";

(async () => {
  try {
    const endpoint = "/contato"; // ← TIROU O S (era /contatos)
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal);

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    tabelaCorpo.innerHTML = "";

    data.forEach((contato) => {
      const linha = document.createElement("tr"); 
      
      linha.innerHTML = `
              <td>${contato.id_contato}</td> 
              <td>${contato.instagram}</td>
              <td>${contato.facebook}</td>
              <td>${contato.whatsapp}</td>
              <td>${contato.email}</td>
              <td>
                <a class="botao editar" href="admincontato.html?id=${contato.id_contato}">Ver</a>
                <a class="botao excluir" data-id="${contato.id_contato}">Excluir</a>
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
      excluirContato(id);
    }
  }

  async function excluirContato(id) {
    try {
      const endpoint = `/contato/${id}`; // ← TIROU O S
      const urlFinal = urlBase + endpoint;

      const response = await fetch(urlFinal, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      alert("Contato excluído com sucesso!");
      window.location.reload(); // Recarrega a página atual
    } catch (error) {
      alert("Contato não foi excluído!");
      console.error(error);
    }
  }
})();