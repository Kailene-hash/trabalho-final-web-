const form = document.getElementById("loginForm");
const erro = document.getElementById("erroLogin");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  // Validação básica
  if (!email || !senha) {
    erro.textContent = "Preencha todos os campos!";
    erro.style.display = "block";
    return;
  }

  // Mostra mensagem de carregamento
  erro.textContent = "Conectando...";
  erro.style.display = "block";
  erro.style.color = "blue";

  try {
    const urlBase = "https://back-end-tf-web-ten.vercel.app";
    
    console.log("Tentando conectar ao servidor...");
    
    const response = await fetch(`${urlBase}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    });

    console.log("Resposta recebida:", response.status);

    const data = await response.json();
    console.log("Dados:", data);

    if (response.ok) {
      // Login bem-sucedido
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuario", email);
      window.location.href = "index.html";
    } else {
      // Erro retornado pelo servidor
      erro.style.color = "red";
      erro.textContent = data.mensagem || "Email ou senha incorretos!";
      erro.style.display = "block";
    }
  } catch (error) {
    console.error("Erro completo:", error);
    erro.style.color = "red";
    erro.textContent = "Erro ao conectar com o servidor! Verifique sua conexão.";
    erro.style.display = "block";
  }
});

document.getElementById("email").addEventListener("input", () => {
  erro.style.display = "none";
});

document.getElementById("senha").addEventListener("input", () => {
  erro.style.display = "none";
});
