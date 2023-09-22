document.addEventListener("DOMContentLoaded", function () {
    // Quando o DOM estiver completamente carregado
  
    // Função para lidar com o envio do formulário de contato
    function enviarFormulario(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Coletar os dados do formulário
      const nome = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const assunto = document.getElementById("subject").value;
      const mensagem = document.getElementById("message").value;
  
      // Montar os dados em um objeto
      const dadosFormulario = {
        name: nome,
        email: email,
        subject: assunto,
        message: mensagem,
      };
  
      // Enviar os dados para o servidor
      fetch("/enviar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosFormulario),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // Lidar com a resposta do servidor
          if (data.message === "Dados do formulário recebidos com sucesso") {
            // Limpar o formulário após o envio bem-sucedido
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
  
            // Exibir uma mensagem de sucesso no console do navegador
            console.log("Formulário enviado com sucesso!");
          } else {
            // Exibir uma mensagem de erro no console do navegador
            console.error("Erro ao enviar o formulário");
          }
        })
        .catch(function (error) {
          // Lidar com erros de rede ou outros erros
          console.error("Erro ao enviar o formulário:", error);
        });
    }
  
    // Adicionar um ouvinte de evento para o envio do formulário
    const formularioContato = document.getElementById("formulario-contato");
    if (formularioContato) {
      formularioContato.addEventListener("submit", enviarFormulario);
    }
  });
  