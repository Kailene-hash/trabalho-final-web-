import * as UC from "https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@1/web/uc-file-uploader-regular.min.js";

UC.defineComponents(UC);

const ctxProvider = document.querySelector("uc-upload-ctx-provider");
var imageUrl = null;
var selimg = document.getElementById("selimg");

ctxProvider.addEventListener("common-upload-success", (e) => {
  e.preventDefault(); 

  selimg.textContent = e.detail.successEntries[0].name;
  imageUrl = e.detail.successEntries[0].cdnUrl;
  document.getElementById("imagem-preview").src = imageUrl;
});

const urlBase = "https://back-end-tf-web-ten.vercel.app";
const botaoSalvar = document.getElementById("submit");
botaoSalvar.addEventListener("click", inserirImagem);

async function inserirImagem(e) {
  e.preventDefault();
  
  // Verifica se a imagem foi selecionada
  if (!imageUrl) {
    alert("Por favor, selecione uma imagem primeiro!");
    return;
  }

  try {
    const dados = {
      link_img: imageUrl, // ← CORRIGIDO: agora usa "link_img"
    };
    
    const endpoint = "/imagens";
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });   

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.mensagem || "Erro na requisição: " + response.status);
    }

    alert("Imagem inserida com sucesso!");
    window.location.href = "adminport.html";
 
  } catch (error) {
    alert("Imagem não inserida: " + error.message);
    console.error(error);
  }
}