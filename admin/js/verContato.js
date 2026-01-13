const urlBase = "https://back-end-tf-web-ten.vercel.app";

// Obtém os parâmetros da URL (query string)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Define o valor inicial do campo "id" como "Carregando..."
document.getElementById("id").value = "Carregando...";

// Função autoexecutável para buscar os dados da questão pelo ID
(async () => {
  try {
    const endpoint = `/contatos/${id}`; // Endpoint da API para obter os dados da questão
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
    document.getElementById("instagram").innerText = data[0].instagram;
    document.getElementById("facebook").value = data[0].facebook;
    document.getElementById("whatsapp").value = data[0].whatsapp;
    document.getElementById("email").value = data[0].email;
    
  } catch (error) {
    // Exibe mensagem de erro no campo "id" caso a requisição falhe
    document.getElementById("id").value = `Erro na requisição: ${error}`;
  }
})();

// Seleciona o botão "Salvar" e adiciona um listener para capturar o evento de clique
const botaoSalvar = document.getElementById("submit");
botaoSalvar.addEventListener("click", salvarContato);

// Função para inserir uma nova questão
async function salvarContato(e) {
  e.preventDefault(); // Impede o comportamento padrão do botão
  
  try {
  
    const dados = {
      instagram: document.getElementById("Instagram").value, 
      facebook: document.getElementById("facebook").value, 
      whatsapp: document.getElementById("whatsapp").value,
      email: document.getElementById("email").value, 
    };

    const endpoint = `/contatos/${id}`; // Endpoint da API para atualizar a questão
    const urlFinal = urlBase + endpoint; // URL completa da requisição

    // Faz a requisição PUT para atualizar os dados da questão
    const response = await fetch(urlFinal, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(dados), // Envia os dados no corpo da requisição
    });

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    // Exibe mensagem de sucesso e redireciona para a página de questões
    alert("Questão alterada com sucesso!");
    window.location.href = "questoes.html";

  } catch (error) {
    // Exibe mensagem de erro e redireciona para a página de questões
    alert("Contato não inserido: " + error);
    window.location.href = "admincontato.html";
  }
}
