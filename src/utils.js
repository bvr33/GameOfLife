export function hasCssClass(target, className) {
	return target.classList.contains(className)
}

export function nodeListToStateArray(parent) {
	const stateArray = []
	for (let childrenLine of parent.childNodes) {
		let line = []
		for (let cell of childrenLine.childNodes) {
			line.push(stringToBoolean(cell.dataset.state))
		}
		stateArray.push(line)
	}
	return deepCopy2dArray(stateArray)
}

export function deepCopy2dArray(array) {
	return array.map((innerArray) => innerArray.map((item) => item))
}

function stringToBoolean(str) {
	if (str == String(true)) return true
	return false
}
