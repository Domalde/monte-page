// Seleciona o formulário
const form = document.querySelector('form');

// Seleciona os campos do formulário
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const mensagem = document.querySelector('#mensagem');

// Adiciona um ouvinte de eventos para o envio do formulário
form.addEventListener('submit', (event) => {
  // Impede que o formulário seja enviado
  event.preventDefault();

  // Valida se todos os campos estão preenchidos
  if (nome.value === '' || email.value === '' || mensagem.value === '') {
    alert('Por favor, preencha todos os campos!');
  } else {
    // Envia o formulário
    form.submit();
  }
});
