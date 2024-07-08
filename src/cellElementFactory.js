import { getCellStateClass } from './cell.js'
import { cssClasses } from './variables.js'

export function cellElementFactory(posX, posY, state) {
	const cell = document.createElement('div')
	Object.assign(cell, {
		className: `${cssClasses.cell} ${getCellStateClass(state)}`,
	})
	Object.assign(cell.dataset, {
		state,
		posX,
		posY,
	})
	return cell
}
