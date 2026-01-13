const urlBase = "https://back-end-tf-web-ten.vercel.app";

// Seleciona o botão "Salvar" e adiciona um listener para capturar o evento de clique
const botaoSalvar = document.getElementById("submit");
botaoSalvar.addEventListener("click", inserirContato);

// Função para inserir uma nova questão
async function inserirContato(e) {
  e.preventDefault(); // Impede o comportamento padrão do botão
  
  try {
  
	  // Coleta os dados do formulário
  const dados = {
    instagram: document.getElementById("Instagram").value, 
    facebook: document.getElementById("facebook").value, 
    whatsapp: document.getElementById("whatsapp").value,
    email: document.getElementById("email").value, 
   };

   const endpoint = "/contatos/"; // Endpoint da API para inserir uma nova questão
   const urlFinal = urlBase + endpoint; // URL completa da requisição

    // Faz a requisição POST para inserir a nova questão
   const response = await fetch(urlFinal, {
    method: "POST",
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
    alert("Contato inserido com sucesso!");
    window.location.href = "admincontato.html";
	  
  } catch (error) {
    // Exibe mensagem de erro e redireciona para a página de questões
    alert("Questão não inserida: " + error);
    window.location.href = "admincontato.html";
  }
}