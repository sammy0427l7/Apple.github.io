let applePosition;
let gameOver = false;

function startGame() {
    applePosition = Math.floor(Math.random() * 3) + 1; // Aleatoriamente elige una posición entre 1, 2 y 3
    gameOver = false;
    document.getElementById('message').innerHTML = '';
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.innerHTML = '<p>¿?</p>';
        option.style.backgroundColor = '#ccc';
    });
}

function checkChoice(selected) {
    if (gameOver) return;

    const selectedOption = document.getElementById(`option${selected}`);

    if (selected === applePosition) {
        selectedOption.innerHTML = '<p>🍎</p>';
        selectedOption.style.backgroundColor = '#ff6347'; // Color de la manzana
        document.getElementById('message').innerHTML = '¡Felicidades! Encontraste la manzana.';
        gameOver = true;
    } else {
        selectedOption.innerHTML = '<p>❓</p>';
        selectedOption.style.backgroundColor = '#f0ad4e'; // Color para el signo de interrogación
        document.getElementById('message').innerHTML = '¡Fallaste! Intenta nuevamente.';
        gameOver = true;
    }
}

function resetGame() {
    startGame();
    document.getElementById('message').innerHTML = '¡Intenta encontrar la manzana!';
}

startGame();