const canvas = document.getElementById("snake")
const context = canvas.getContext("2d")
const box = 32

let direction = "right"
let snake = []
snake[0] = { x: 8 * box, y: 8 * box }

function initializeCanvas () {
    context.fillStyle = "#2a2a2a"
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function drawSnake () {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "#9c27b0"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function initGame() {
    initializeCanvas()
    drawSnake()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    switch (direction) {
        case "right":
            snakeX += box
            break
        case "left":
            snakeX -= box
            break;
        case "up":
            snakeY -= box
            break
        case "down":
            snakeY += box
            break
    }

    let newSnake = { x: snakeX, y: snakeY }
    
    snake.pop()
    snake.unshift(newSnake)
}

let jogo = setInterval(initGame, 100)