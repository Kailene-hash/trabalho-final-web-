const urlBase = "https://back-end-tf-web-ten.vercel.app/";
const tabelaCorpo = document.getElementById("tabela-corpo");
tabelaCorpo.innerHTML = "Aguarde...";
// Função autoexecutável para buscar e exibir as questões
(async () => {
  try {
    const endpoint = "/imagens"; // Endpoint da API para obter as questões
    const urlFinal = urlBase + endpoint; // URL completa da requisição

    // Faz a requisição para obter as questões
	    const response = await fetch(urlFinal);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    // Converte a resposta para JSON
    const data = await response.json();

    // Limpa a mensagem inicial
    tabelaCorpo.innerHTML = "";

    // Loop para preencher a tabela com as questões recebidas
    data.forEach((imagem) => {
    
    // Cria uma nova linha na tabela
      const linha = document.createElement("tr"); 
      
      // Preenche as colunas da linha com as informações da requisição
      linha.innerHTML = `
              <td>${imagem.id}</td>
              <td>${imagem.link_img}</td>
                <td>
                <a class="botao inserir" href="ver-imagem.html?id=${imagem.id}">Ver</a>
                <a class="botao excluir" data-id="${imagem.id}">Excluir</a>
              </td>
              `;
      // Adiciona a linha à tabela HTML
      tabelaCorpo.appendChild(linha); 
    });
  } catch (error) {
    // Exibe mensagem de erro caso a requisição falhe
    tabelaCorpo.innerHTML = `Erro na requisição: ${error}`;
  }
})();