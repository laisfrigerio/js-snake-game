const canvas = document.getElementById("snake")
const context = canvas.getContext("2d")
const box = 32

let direction = "right"
let food = { x: Math.floor(Math.random() * 15 + 1) * box, y: Math.floor(Math.random() * 15 + 1) * box }
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

function checkCollision () {
    if (snake[0].x > (15 * box) && direction == "right") snake[0].x = 0
    if (snake[0].x < 0 && direction == "left") snake[0].x = (16 * box)
    if (snake[0].y > (15 * box) && direction == "down") snake[0].y = 0
    if (snake[0].y < 0 && direction == "up") snake[0].y = (16 * box)
}

function drawFood () {
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box)
}

function toEat() {
    if (snake[0].x == food.x && snake[0].y == food.y) {
        snake.unshift({ x: box, y: box })
        food = { x: Math.floor(Math.random() * 15 + 1) * box, y: Math.floor(Math.random() * 15 + 1) * box }
    } else {
        snake.pop()
    }
}

document.addEventListener('keydown', update)

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left"
    if (event.keyCode == 38 && direction != "down") direction = "up"
    if (event.keyCode == 39 && direction != "left") direction = "right"
    if (event.keyCode == 40 && direction != "up") direction = "down"
}

function initGame() {
    checkCollision() 
    initializeCanvas()
    drawSnake()
    drawFood()

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

    toEat()
    let newSnake = { x: snakeX, y: snakeY }
    
    snake.unshift(newSnake)
}

let jogo = setInterval(initGame, 100)