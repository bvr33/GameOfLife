import { clearBoard, initBoard } from './board.js'
import { changeButton } from './button.js'
import { changeCellState } from './cell.js'
import {
	changeStartedState,
	gameBoard,
	gameControls,
	gameStarted,
	stopGame,
	toggleGame,
} from './main.js'
import { hasCssClass } from './utils.js'
import { BOARD_SIZE, cssClasses } from './variables.js'

function handleCellStateChange({ target }) {
	if (!hasCssClass(target, cssClasses.cell)) return
	target.classList.toggle(cssClasses.cellLive)
	target.classList.toggle(cssClasses.cellDead)
	changeCellState(target)
}
function handleControlsClick({ target }) {
	if (!hasCssClass(target, cssClasses.controlButtons)) return
	if (hasCssClass(target, cssClasses.buttonPlay)) {
		handleStopStart(target)
	}
	if (hasCssClass(target, cssClasses.buttonReset)) {
		handleReset()
	}
}

function handleStopStart(target) {
	changeButton(gameStarted, target)
	changeStartedState(!gameStarted)
	toggleGame()
}
function handleReset() {
	changeStartedState(false)
	changeButton(true, document.querySelector(`.${cssClasses.buttonPlay}`))
	stopGame()
	clearBoard(gameBoard)
	initBoard(BOARD_SIZE.x, BOARD_SIZE.y)
}

export function initHandlers() {
	gameControls.addEventListener('click', handleControlsClick)
	gameBoard.addEventListener('click', handleCellStateChange)
}
