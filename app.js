const canvas = document.getElementById("snake")
const context = canvas.getContext("2d")
const box = 32

function initializeCanvas () {
    context.fillStyle = "#2a2a2a";
    context.fillRect(0, 0, 16 * box, 16 * box)
}

initializeCanvas()