const urlBase = "https://back-end-tf-web-ten.vercel.app";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.getElementById("id").value = "Carregando...";

(async () => {
  try {
    const endpoint = `/contato/${id}`; // ← TIROU O S
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal);

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();

    // Preenche os campos
    document.getElementById("id").value = data[0].id_contato; // ← CORRIGIDO
    document.getElementById("instagram").value = data[0].instagram; // ← CORRIGIDO (era innerText)
    document.getElementById("facebook").value = data[0].facebook;
    document.getElementById("whatsapp").value = data[0].whatsapp;
    document.getElementById("email").value = data[0].email;
    
  } catch (error) {
    document.getElementById("id").value = `Erro na requisição: ${error}`;
  }
})();

const botaoSalvar = document.getElementById("submit");
botaoSalvar.addEventListener("click", salvarContato);

async function salvarContato(e) {
  e.preventDefault();
  
  try {
    const dados = {
      instagram: document.getElementById("instagram").value, // ← MINÚSCULO
      facebook: document.getElementById("facebook").value, 
      whatsapp: document.getElementById("whatsapp").value,
      email: document.getElementById("email").value, 
    };

    const endpoint = `/contato/${id}`; // ← TIROU O S
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    alert("Contato alterado com sucesso!");
    window.location.href = "admincontato.html"; // ← CORRIGIDO
  } catch (error) {
    alert("Contato não alterado: " + error);
    window.location.href = "admincontato.html";
  }
}