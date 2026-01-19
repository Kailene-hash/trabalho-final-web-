const urlBase = "https://back-end-tf-web-ten.vercel.app";
const contatoContainer = document.getElementById("contato-container");

(async () => {
  try {
    const endpoint = "/contato";
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal);

    if (!response.ok) {
      throw new Error("Erro ao buscar dados de contato");
    }

    const data = await response.json();

   
    contatoContainer.innerHTML = "";


    if (data.length > 0) {
      const contato = data[data.length - 1]; 

      contatoContainer.innerHTML = `
        <div class="linha">
          <span class="label">WhatsApp</span>
          <div class="campo">${contato.whatsapp}</div>
        </div>

        <div class="linha">
          <span class="label">Email</span>
          <div class="campo">${contato.email}</div>
        </div>

        <div class="linha">
          <span class="label">Instagram</span>
          <div class="campo">${contato.instagram}</div>
        </div>

        <div class="linha">
          <span class="label">Facebook</span>
          <div class="campo">${contato.facebook}</div>
        </div>
      `;
    } else {
      contatoContainer.innerHTML = `
        <div class="linha">
          <span class="label">Sem informações</span>
          <div class="campo">Nenhum contato cadastrado ainda.</div>
        </div>
      `;
    }
  } catch (error) {
    console.error("Erro ao carregar contato:", error);
    contatoContainer.innerHTML = `
      <div class="linha">
        <span class="label">Erro</span>
        <div class="campo">Não foi possível carregar as informações de contato.</div>
      </div>
    `;
  }
})();