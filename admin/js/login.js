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

  try {
    // Faz a requisição para o back-end
    const response = await fetch("https://back-end-tf-web-ten.vercel.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    });

    const data = await response.json();

    if (response.ok) {
      // Login bem-sucedido
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuario", email);
      window.location.href = "index.html";
    } else {
      // Erro retornado pelo servidor
      erro.textContent = data.mensagem || "Email ou senha incorretos!";
      erro.style.display = "block";
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    erro.textContent = "Erro ao conectar com o servidor!";
    erro.style.display = "block";
  }
});

document.getElementById("email").addEventListener("input", () => {
  erro.style.display = "none";
});

document.getElementById("senha").addEventListener("input", () => {
  erro.style.display = "none";
});