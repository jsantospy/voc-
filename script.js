const button = document.getElementById('messageButton');
const message = document.getElementById('message');

const messages = [
    "Você é a razão do meu sorriso! 😊",
    "Meu coração acelora por você❤️",
    "Meu amor por você é como um aplicativo: sempre atualizado! ❤️",
    "Você é o chocolate que adoça meu dia! 🍫",
];

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    message.classList.remove('hidden');
});
