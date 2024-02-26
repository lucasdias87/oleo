//// parte do chat

let  m1=   JSON.parse(localStorage.getItem("km"));

let  m2=   JSON.parse(localStorage.getItem("tipooleo"));
let  m3=   JSON.parse(localStorage.getItem("data"));

// Função para inicialização, chamada quando a página carrega









document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
    askquestion()
  
  }
});
  
  
function esperar(){
  setTimeout,1000
 

}



const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');

function askquestion() {
  const userQuestion = userInput.value;
  if (userQuestion.trim() === '') return;

  appendMessage('user', userQuestion);

  // Simulação de resposta do robô 
  const robotAnswer = simulateRobotResponse(userQuestion);
  appendMessage('robot', robotAnswer);

  userInput.value = '';
}

function appendMessage(sender, message) {
  const messageContainer = document.createElement('div');
  messageContainer.className = `${sender}-message`;
  messageContainer.textContent = `${sender === 'user' ? 'Você:' : 'Peter:'} ${message}`;
  chatOutput.appendChild(messageContainer);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function simulateRobotResponse(question) {
  // Simulação simples de resposta com base na pergunta
  if (question.includes('Oi')) {
    return "Oi, eu sou o Peter! Pode mandar suas perguntas sobre trocas, tipo: \n\n   'Por que tenho que trocar o óleo' \n\nou ' Cadastrar a minha troca'. Estou aqui pra te ajudar a entender tudo sobre a manutenção da sua motona !'";
  }
  if (question.includes('Dica' )) {
    return "Me pergunte: 'Cadastrar minha troca' ou \n\n'Proxima troca'";
  }


   if(question.includes('Cadastrar a minha troca')){
    return'Se ligue no botão do óleo lá em cima! É só clicar e pronto, você vai cadastrar a próxima troca! Eu sou o Peter, o mecânico virtual com as chaves de grifo mais afiadas da internet! ';
  

  }

    if (question.includes('Proxima troca' )) {
      if (m1 && m2 && m3) {
        return`Oi, eu sou o Peter! Sua última troca de óleo é dia ${m3} com ${m1} km percorridos e usando o tipo de óleo ${m2}. Como posso ajudar você hoje?`;
      
      } else {
        return"Oi, eu sou o Peter! Sou o mecânico virtual mais engraçadão da internet! 🛠️💬 Fala aí sobre trocas de óleo, 'cadastrar a minha troca' ou pede uma 'dica'! Estou aqui pra ajudar!";
        
      }
  }
 
    else if(question.includes('Porque tenho que trocar o oleo')){
      return'A troca de óleo em motocicletas é crucial para manter a saúde do motor\n\n e garantir um desempenho duradouro. O óleo lubrifica as peças móveis\n\nreduzindo o atrito e evitando o desgaste prematuro. Além disso, contribui para o resfriamento\n\n e limpeza do motor.  Uma motocicleta requer a troca de óleo para evitar danos internos.'
    
  } 
   if(question.includes("Salvar")){
    return'Para salvar a próxima troca de óleo no Google Agenda, crie um evento com data, hora e lembretes. Escolha a agenda adequada e salve-o para receber lembretes à medida que a data se aproxima. Isso garantirá que você não perca o prazo para a próxima troca de óleo, mantendo a moto em bom estado.'
  }
  
  
 else  {
    return "Eita, perdão pela bagunça! Não peguei o trampo direito. Quer falar sobre o que? digite 'Dica'";
  }
  
}



