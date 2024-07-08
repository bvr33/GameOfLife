import { clearBoard, initBoard, updateBoard } from './board.js'
import { startCycle } from './game.js'
import { initHandlers } from './handlers.js'
import { nodeListToStateArray } from './utils.js'
import { BOARD_SIZE } from './variables.js'

export const gameBoard = document.querySelector('.js-gameBoard')
export const gameControls = document.querySelector('.js-gameControls')

export let gameStarted = false
let intervalId = undefined

export function toggleGame() {
	if (!gameStarted) {
		stopGame()
		return
	}
	startGame()
}

export function stopGame() {
	clearInterval(intervalId)
}

function startGame() {
	intervalId = setInterval(() => {
		gameLoop(gameBoard)
	}, 200)
}

function gameLoop(parent) {
	const state = nodeListToStateArray(parent)
	clearBoard(parent)
	updateBoard(startCycle(state))
}

function init() {
	initHandlers()
	initBoard(BOARD_SIZE.x, BOARD_SIZE.y)
}

export function changeStartedState(state) {
	gameStarted = state
}

init()
