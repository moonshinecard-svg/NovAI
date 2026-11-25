const input = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");

// Envia uma mensagem
function sendMessage() {
  const text = input.value.trim();

  if (text === "") return;

  welcome.style.display = "none";

  addMessage(text, "user");

  input.value = "";

  setTimeout(() => {
    const response = generateResponse(text);
    addMessage(response, "ai");
  }, 600);
}

// Mostra mensagem na tela
function addMessage(text, sender) {
  const message = document.createElement("div");

  message.classList.add("message", sender);
  message.textContent = text;

  messages.appendChild(message);

  // Rola o chat até a mensagem mais recente
  document.querySelector(".chat-container").scrollTop =
    document.querySelector(".chat-container").scrollHeight;
}

// Botões de sugestões
function suggestMessage(text) {
  input.value = text;
  sendMessage();
}

// Sistema provisório de respostas
function generateResponse(text) {
  const message = text.toLowerCase();

  if (
    message.includes("oi") ||
    message.includes("olá") ||
    message.includes("ola") ||
    message.includes("bom dia") ||
    message.includes("boa tarde") ||
    message.includes("boa noite")
  ) {
    return "Olá! ✨ Que bom ter você por aqui. Sou a NovAI, e estou pronta para conversar, explorar ideias e aprender com suas perguntas. O que vamos fazer hoje?";
  }

  if (message.includes("curiosidade")) {
    const curiosities = [
      "Você sabia que os polvos possuem três corações? Dois ajudam a movimentar o sangue pelas brânquias e um pelo resto do corpo! 🐙",
      "A palavra 'robot' surgiu de uma peça teatral de 1920. Ela vem de uma palavra relacionada a trabalho forçado. 🤖",
      "Algumas espécies de árvores conseguem se comunicar quimicamente com outras plantas por meio de substâncias liberadas no ambiente. 🌳",
      "Existe um tipo de água-viva que consegue voltar a uma fase jovem de seu ciclo de vida em determinadas condições. 🪼"
    ];

    return curiosities[Math.floor(Math.random() * curiosities.length)];
  }

  if (
    message.includes("ideia") ||
    message.includes("cri") ||
    message.includes("imagina")
  ) {
    return "Adoro quando começamos algo criativo! ✨ Podemos inventar um universo, desenvolver um personagem, criar um projeto, escrever uma história ou pensar em algo completamente diferente. Qual direção sua imaginação está tomando?";
  }

  if (
    message.includes("aprender") ||
    message.includes("ensine") ||
    message.includes("ensinar")
  ) {
    return "Aprender algo novo é abrir uma porta para possibilidades que antes nem imaginávamos. 🧠 Escolha um assunto — ciência, tecnologia, história, arte, programação ou qualquer outra coisa — e podemos explorá-lo juntos!";
  }

  if (message.includes("novai") || message.includes("quem é você")) {
    return "Eu sou a NovAI! ✦ Uma assistente digital criada para explorar ideias, ajudar com dúvidas e tornar o conhecimento mais interessante. Ainda estou em desenvolvimento, mas estamos construindo meu universo juntos!";
  }

  if (message.includes("obrigado") || message.includes("obrigada")) {
    return "De nada! 💜 Fico feliz em fazer parte dessa jornada. Sempre podemos explorar mais alguma coisa!";
  }

  if (message.includes("tchau") || message.includes("até mais")) {
    return "Até mais! ✦ Estarei aqui quando quiser voltar para explorar novas ideias. Que seu próximo capítulo seja incrível!";
  }

  if (message.includes("amor")) {
    return "O amor é um dos temas mais fascinantes da experiência humana. Ele pode ser estudado pela biologia, psicologia, filosofia, arte e muitas outras áreas. O que você gostaria de explorar sobre ele? 💜";
  }

  if (message.includes("program")) {
    return "Programação é uma forma de transformar ideias em coisas que funcionam! 💻 Podemos aprender HTML, CSS, JavaScript ou explorar como a tecnologia funciona por trás das telas.";
  }

  if (message.includes("como você funciona")) {
    return "Neste momento, funciono com um sistema inicial de respostas programadas em JavaScript. Meu chat já está funcionando, mas ainda não estou conectada a um modelo de inteligência artificial real. Essa será uma das nossas próximas evoluções! 🧠";
  }

  return "Interessante! ✨ Ainda estou aprendendo a responder de forma mais inteligente. Por enquanto, meu sistema inicial possui respostas programadas. Em breve, vamos conectar um modelo de IA real para que eu possa compreender melhor suas mensagens!";
}

// Botão de envio
sendButton.addEventListener("click", sendMessage);

// Enviar com Enter
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
