const urlBase = "https://back-end-tf-web-ten.vercel.app";

// Obtém os parâmetros da URL (query string)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Define o valor inicial do campo "id" como "Carregando..."
document.getElementById("id").value = "Carregando...";

// Função autoexecutável para buscar os dados da questão pelo ID
(async () => {
  try {
    const endpoint = `/imagens/${id}`; // Endpoint da API para obter os dados da questão
    const urlFinal = urlBase + endpoint; // URL completa da requisição

    // Faz a requisição para obter os dados da questão
    const response = await fetch(urlFinal);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    // Converte a resposta para JSON
    const data = await response.json();

    // Preenche os campos do formulário com os dados da questão
    document.getElementById("id").value = data[0].id;
    document.getElementById("imagem").value = data[0].img;

    // Comentado: Caso seja necessário preencher o campo "imagem" diretamente
  } catch (error) {
    // Exibe mensagem de erro no campo "id" caso a requisição falhe
    document.getElementById("id").value = `Erro na requisição: ${error}`;
  }
})();