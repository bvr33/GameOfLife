import { cssClasses } from './variables.js'

export function changeCellState({ dataset }) {
	dataset.state = dataset.state == 'false' ? 'true' : 'false'
}
export function getCellStateClass(state) {
	if (state) return cssClasses.cellLive
	return cssClasses.cellDead
}
