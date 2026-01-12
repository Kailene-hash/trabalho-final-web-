const form = document.getElementById("loginForm");
const erro = document.getElementById("erroLogin");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  const emailCorreto = "admin@ventura.com";
  const senhaCorreta = "123456";

  if (email === emailCorreto && senha === senhaCorreta) {
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuario", email);
    window.location.href = "index.html";
  } else {
    erro.style.display = "block";
  }
});

document.getElementById("email").addEventListener("input", () => {
  erro.style.display = "none";
});
document.getElementById("senha").addEventListener("input", () => {
  erro.style.display = "none";
});

