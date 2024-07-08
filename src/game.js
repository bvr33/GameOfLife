export function startCycle(cellsArray) {
	let nextState = []
	for (let x = 0; x < cellsArray.length; x++) {
		const cellsLine = []
		for (let y = 0; y < cellsArray[x].length; y++) {
			cellsLine.push(
				changeCellState(cellsArray[x][y], countAliveNeighbor(cellsArray, x, y)),
			)
		}
		nextState.push(cellsLine)
	}
	return nextState
}

function countAliveNeighbor(cellsArray, posX, posY) {
	let counter = 0
	for (let x = posX - 1; x <= posX + 1; x++) {
		for (let y = posY - 1; y <= posY + 1; y++) {
			if (x == posX && y == posY) continue
			if (NeighborIsAlive(cellsArray, x, y)) counter++
		}
	}
	return counter
}

function NeighborIsAlive(cellsArray, x, y) {
	return cellsArray?.[x]?.[y] == true
}

function changeCellState(cellState, aliveNeighborsCount) {
	if (cellState && (aliveNeighborsCount == 3 || aliveNeighborsCount == 2))
		return true
	if (!cellState && aliveNeighborsCount == 3) return true
	return false
}
