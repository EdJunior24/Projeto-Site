const user = document.getElementById('nameUser');
const senha = document.getElementById('senhaUser');

const dataUsers = [
    {
        nome: "Maria",
        senha: "123@"
    },

    {
        nome: "MRX",
        senha: "1236"
    },

    {
        nome: "Tiago",
        senha: "1235"
    },

    {
        nome: "José",
        senha: "1234"
    }
]

function validUsers(usuario, senha) {
   if (!usuario || !senha) {
      alert('Digite alguma coisa');
   }

   for (let user of dataUsers) {
      if (usuario === user.nome && senha === user.senha) {
         alert(`Bem-vindo(a) ${usuario}`);
      } else {
         console.log(`Senha ou nome inválidos!`);
      }
   }
}

document.addEventListener('submit', (event) => { 
    event.preventDefault();

    validUsers(user.value, senha.value);
});