document.addEventListener("DOMContentLoaded", () => {
  console.log("Site carregado com sucesso!");

  const btn = document.querySelector('.btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Você será redirecionado para a solução proposta!');
    });
  }

  const form = document.getElementById("form-contato");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const erro = document.getElementById("msg-erro");

  if (form && nome && email && mensagem && erro) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
        erro.textContent = "Por favor, preencha todos os campos.";
        return;
      }

      if (!email.value.includes("@") || !email.value.includes(".")) {
        erro.textContent = "E-mail inválido.";
        return;
      }

      erro.textContent = "";
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
});
