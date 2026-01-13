const urlBase = "https://back-end-tf-web-ten.vercel.app";

const botaoSalvar = document.getElementById("submit");
botaoSalvar.addEventListener("click", inserirContato);

async function inserirContato(e) {
  e.preventDefault();
  
  try {
    const dados = {
      instagram: document.getElementById("instagram").value, // ← Ajuste conforme seu HTML
      facebook: document.getElementById("facebook").value, 
      whatsapp: document.getElementById("whatsapp").value,
      email: document.getElementById("email").value, 
    };

    const endpoint = "/contato"; // ← TIROU O S e a barra final
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    alert("Contato inserido com sucesso!");
    window.location.href = "admincontato.html";
	  
  } catch (error) {
    alert("Contato não inserido: " + error);
    window.location.href = "admincontato.html";
  }
}