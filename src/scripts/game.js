import { 
  update as updateSnake, 
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead,
  snakeIntersection
} from './snake.js'
import {
  update as updateFood,
  draw as drawFood
} from './food.js'
import {
  outsideGrid
} from './grid.js'

let lastRenderTime = 0
let gameOver = false

const gameBoard = document.getElementById('gameBoard')

function main(currentTime) {

  if (gameOver) {
    if (confirm('You lost! Press Ok to restart.')) {
      window.location = '/'
    }

    // handle not click on Ok button
    return
  }

  // loop
  window.requestAnimationFrame(main)

  // transform in seconds
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

  // only update based on key "snakeSpeed", for example, 1 refreshes game every one second
  if (secondsSinceLastRender < 1 / snakeSpeed) {
    return
  }

  lastRenderTime = currentTime

  update()
  draw()
}

// force first execution
window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  // clear board when snake moves (to clear trace)
  gameBoard.innerHTML = ''

  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  let snakeHead = getSnakeHead()
  gameOver = outsideGrid(snakeHead) || snakeIntersection()
}