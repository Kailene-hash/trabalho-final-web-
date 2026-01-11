document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const emailCorreto = "admin@ventura.com";
  const senhaCorreta = "123456";

  if (email === emailCorreto && senha === senhaCorreta) {
  localStorage.setItem("logado", "true");
  localStorage.setItem("usuario", email); // salva o email
  window.location.href = "index.html";
} else {
  window.location.href = "pgerro.html";
}
});