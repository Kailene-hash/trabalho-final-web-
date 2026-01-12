// Importa o módulo do Uploadcare para gerenciar o upload de arquivos
import * as UC from "https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@1/web/uc-file-uploader-regular.min.js";

// Define os componentes do Uploadcare
UC.defineComponents(UC);

// Seleciona o componente de upload do Uploadcare
const ctxProvider = document.querySelector("uc-upload-ctx-provider");

var imageUrl = null; // URL da imagem enviada
var selimg = document.getElementById("selimg"); // Elemento para exibir o nome da imagem selecionada

// Adiciona um listener para capturar o evento de sucesso no upload
ctxProvider.addEventListener("common-upload-success", (e) => {
  e.preventDefault(); 

  // Atualiza o nome da imagem selecionada e a URL da imagem
  selimg.textContent = e.detail.successEntries[0].name;
  imageUrl = e.detail.successEntries[0].cdnUrl;

  // Atualiza o preview da imagem com a URL da imagem enviada
  document.getElementById("imagem-preview").src = imageUrl;

const urlBase = "https://back-end-tf-web-ten.vercel.app";

  // Seleciona o botão "Salvar" e adiciona um listener para capturar o evento de clique
  const botaoSalvar = document.getElementById("submit");
  botaoSalvar.addEventListener("click", inserirImagem);

      // Função para inserir uma nova questão
async function inserirImagem(e) {
 e.preventDefault(); // Impede o comportamento padrão do botão
  
    try {
        // Coleta os dados do formulário
      const dados = {
        imagem: imageUrl, // URL da imagem enviada ao Uploadcare
      };
      const endpoint = "/imagens/"; // Endpoint da API para inserir uma nova questão
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
      alert("Imagem inserida com sucesso!");
      window.location.href = "adminport.html";
	  
    } catch (error) {
        // Exibe mensagem de erro e redireciona para a página de questões
        alert("Imagem não inserida: " + error);
        window.location.href = "adminport.html";
    }
}
});