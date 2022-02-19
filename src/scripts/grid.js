const gridSize = 21

export function getRandomGridPosition() {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1
  }
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > gridSize ||
    position.y < 1 || position.y > gridSize
  )
}