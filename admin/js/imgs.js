const urlBase = "https://back-end-tf-web-ten.vercel.app";
const tabelaCorpo = document.getElementById("tabela-corpo");
tabelaCorpo.innerHTML = "Aguarde...";
// Função autoexecutável para buscar e exibir as imagens
(async () => {
  try {
    const endpoint = "/imagens"; // Endpoint da API para obter as questões
    const urlFinal = urlBase + endpoint; // URL completa da requisição

    // Faz a requisição para obter as imagens
	    const response = await fetch(urlFinal);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    // Converte a resposta para JSON
    const data = await response.json();

    // Limpa a mensagem inicial
    tabelaCorpo.innerHTML = "";

    // Loop para preencher a tabela com as imagens recebidas
    data.forEach((imagem) => {
    
    // Cria uma nova linha na tabela
      const linha = document.createElement("tr"); 
      
      // Preenche as colunas da linha com as informações da requisição
      linha.innerHTML = `
              <td>${imagem.id}</td>
              <td>${imagem.link_img}</td>
                <td>
                <a class="botao inserir" href="adminport.html?id=${imagem.id}">Ver</a>
                <a class="botao excluir" data-id=${imagem.id}">Excluir</a>
              </td>
              `;
      // Adiciona a linha à tabela HTML
      tabelaCorpo.appendChild(linha); 
    });
  } catch (error) {
    // Exibe mensagem de erro caso a requisição falhe
    tabelaCorpo.innerHTML = `Erro na requisição: ${error}`;
  }

  // Adiciona um listener de evento para capturar cliques na tabela
    tabelaCorpo.addEventListener("click", acao);
    // Função para lidar com ações de clique na tabela
  function acao(e) {
	  e.preventDefault(); // Impede o comportamento padrão do link
    if (e.target.classList.contains("excluir")) {
      const id = e.target.getAttribute("data-id"); // Obtém o ID do usuário a ser excluído
      excluirImagem(id); // Chama a função para excluir o usuário
    }
  }
// Função para excluir uma questão
  async function excluirImagem(id) {
    try {
      const endpoint = `/imagens/${id}`; // Endpoint da API para excluir a imagem
      const urlFinal = urlBase + endpoint; // URL completa da requisição

      // Faz a requisição DELETE para excluir a imagem
      const response = await fetch(urlFinal, {
        method: "DELETE",
      });

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json(); // Converte a resposta para JSON (opcional)

      // Exibe mensagem de sucesso
      alert("Imagem excluída com sucesso!");
    } catch (error) {
      // Exibe mensagem de erro caso a exclusão falhe
      alert("Imagem não foi excluída!");
    }

      // Recarrega a página para atualizar a lista de questões
    window.location.href = "imagens.html";
}
})();