const btnGenerator = document.querySelector('#btn-generator');
const iconGenerator = document.querySelector('#icon-generator');
const checkbox1 = document.querySelector('#lenght-1');
const checkbox2 = document.querySelector('#lenght-2');
const checkbox3 = document.querySelector('#lenght-3');
const password = document.querySelector('#password');

btnGenerator.addEventListener('click', () => {
    iconGenerator.classList.add("animate-spin", "animate-once", "animate-ease-in", "animate-duration-1000");

    if (checkbox1.checked) {
        password.innerText = generatePass(8);
    } else if (checkbox2.checked) {
        password.innerText = generatePass(16);
    } else if (checkbox3.checked) {
        password.innerText = generatePass(24);
    }
});

const characters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPKRSTUVWXYZ1234567890_-:.;,{}[]'¿?¡!/()";

function generatePass(length = 8) {
    let result = "";
    for (let i = 0; i <= length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}