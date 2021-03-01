import {
  samePositionAsSnake,
  expandSnake
} from './snake.js'
import {
  getRandomGridPosition
} from './grid.js'

let food = getRandomFoodPosition()

const expansionRate = 1

export function update() {
  if (samePositionAsSnake(food)) {
    expandSnake(expansionRate)

    // draw new food
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')

  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition

  while (newFoodPosition == null || samePositionAsSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPosition()
  }

  return newFoodPosition
}