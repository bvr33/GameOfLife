import { cssClasses } from './variables.js'

export function rowElementFactory() {
	const row = document.createElement('span')
	row.className = cssClasses.row
	return row
}
