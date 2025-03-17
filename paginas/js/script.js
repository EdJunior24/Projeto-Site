const user = document.getElementById('nameUser');
const senha = document.getElementById('senhaUser');
const form = document.getElementById('formulario');

// Verifica se os elementos existem antes de continuar
if (user && senha && form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = user.value.trim();
    const pass = senha.value.trim();

    if (!nome || !pass) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameUser: nome, senhaUser: pass }) // Agora está igual ao back-end
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Erro ao processar resposta do servidor.");
      }

      if (response.ok && data.status) {
        window.location.href = "/app";
      } else {
        alert(data.erro || "Erro desconhecido!");
      }
    } catch (e) {
      console.error("Erro na requisição:", e);
      alert("Erro ao conectar ao servidor.");
    }
  });
} else {
  console.error("Erro: Elementos do formulário não encontrados.");
}
/*
const user = document.getElementById('nameUser');
const senha = document.getElementById('senhaUser');

document.getElementById('formulario').addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = user.value.trim();
  const pass = senha.value.trim();

  if (!nome || !pass) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    const response = await fetch("/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameUser: nome, senhaUser: pass }) // Agora está igual ao back-end
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "/app";
    } else {
      alert(data.erro || 'Erro desconhecido!');
    }
  } catch (e) {
    console.error("Erro na requisição:", e);
    alert("Erro ao conectar ao servidor.");
  }
});
*/