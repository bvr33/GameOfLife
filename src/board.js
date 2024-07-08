import { cellElementFactory } from './cellElementFactory.js'
import { gameBoard } from './main.js'
import { rowElementFactory } from './rowElementFactory.js'

export function initBoard(arrayXSize, arrayYSize) {
	for (let x = 0; x < arrayXSize; x++) {
		const row = rowElementFactory()
		for (let y = 0; y < arrayYSize; y++) {
			row.append(cellElementFactory(x, y, false))
		}
		gameBoard.append(row)
	}
}

export function updateBoard(stateArray) {
	for (let x = 0; x < stateArray.length; x++) {
		const row = rowElementFactory()
		for (let y = 0; y < stateArray[x].length; y++) {
			row.append(cellElementFactory(x, y, stateArray[x][y]))
		}
		gameBoard.append(row)
	}
}

export function clearBoard(board) {
	board.innerHTML = ''
}
