const startingNumber = prompt("Digite um número para iniciar o jogo:");
if (startingNumber !== null && !isNaN(startingNumber)) {
    const startingScore = parseInt(startingNumber);
    startGame(startingScore);
} else {
    alert("Por favor, insira um número válido para iniciar o jogo.");
}

function startGame(initialScore) {
}
document.addEventListener("keydonw" , ({ key }) => {
    if (key == "tecladireita") {
        direction = "left"
    }
})





document.addEventListener("keydonw" , ({ key }) => {
    if (key == "tecladireita") {
        direction = "left"
    }
})




const board = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const boardSize = 400;
const cellSize = 40; 
let snake = [{ x: 200, y: 200 }];
let direction = { x: 0, y: 0 };
let food = { x: 0, y: 0 };
let score = 0;

function init() {
    document.addEventListener('keydown', changeDirection);
    placeFood();
    update();
}

function update() {
    moveSnake();
    if (isGameOver()) {
        alert('Fim de jogo!');
        return;
    }
    if (isFoodEaten()) {
        growSnake();
        placeFood();
        updateScore();
    }
    render();
    setTimeout(update, 100);
}

function changeDirection(event) {
    const { key } = event;
    switch (key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -cellSize };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: cellSize };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -cellSize, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: cellSize, y: 0 };
            break;
    }
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);
    snake.pop();
}

function isGameOver() {
    const head = snake[0];
    if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

function isFoodEaten() {
    const head = snake[0];
    return head.x === food.x && head.y === food.y;
}

function growSnake() {
    const tail = { ...snake[snake.length - 1] };
    snake.push(tail);
}

function placeFood() {
    food = {
        x: Math.floor(Math.random() * (boardSize / cellSize)) * cellSize,
        y: Math.floor(Math.random() * (boardSize / cellSize)) * cellSize,
    };
}

function updateScore() {
    score += 10;
    scoreDisplay.textContent = `Pontuação: ${score}`;
}

function render() {
    board.innerHTML = '';
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.left = `${segment.x}px`;
        snakeElement.style.top = `${segment.y}px`;
        snakeElement.classList.add('snake');
        snakeElement.style.backgroundImage = 'url(snake.png)';
        board.appendChild(snakeElement);
    });
    const foodElement = document.createElement('div');
    foodElement.style.left = `${food.x}px`;
    foodElement.style.top = `${food.y}px`;
    foodElement.classList.add('food');
    foodElement.style.backgroundImage = 'url(food.png)';
    board.appendChild(foodElement);
}

init();

