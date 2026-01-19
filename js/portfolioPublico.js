const urlBase = "https://back-end-tf-web-ten.vercel.app";
const portfolioSection = document.getElementById("principalPortfolio");

(async () => {
  try {
    const endpoint = "/imagens";
    const urlFinal = urlBase + endpoint;

    const response = await fetch(urlFinal);

    if (!response.ok) {
      throw new Error("Erro ao buscar imagens do portfólio");
    }

    const data = await response.json();

    // Limpa o container
    portfolioSection.innerHTML = "";

    // Se houver imagens, exibe todas
    if (data.length > 0) {
      // ORDENAR por ID decrescente (maior ID = mais recente = aparece primeiro)
      const imagensOrdenadas = data.sort((a, b) => b.id - a.id);
      
      imagensOrdenadas.forEach((imagem, index) => {
        const img = document.createElement("img");
        img.src = imagem.link_imagem;
        img.alt = `Imagem ${index + 1} do portfólio`;
        img.id = `Img${index + 1}`;
        img.classList.add("portfolio-img");
        
        // Tratamento de erro caso a imagem não carregue
        img.onerror = function() {
          this.style.display = "none";
          console.error(`Erro ao carregar imagem: ${imagem.link_imagem}`);
        };

        portfolioSection.appendChild(img);
      });
    } else {
      portfolioSection.innerHTML = `
        <div class="sem-imagens">
          <p>Nenhuma imagem no portfólio ainda.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error("Erro ao carregar portfólio:", error);
    portfolioSection.innerHTML = `
      <div class="erro-portfolio">
        <p>Não foi possível carregar o portfólio.</p>
      </div>
    `;
  }
})();