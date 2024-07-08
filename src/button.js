export function changeButton(isGameStarted, btn) {
	if (isGameStarted) btn.innerText = 'Start'
	else btn.innerText = 'Stop'
}
