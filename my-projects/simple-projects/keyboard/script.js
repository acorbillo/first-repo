let display = document.getElementById('display');

function displayLetter(letter) {
	display.value = display.value + letter;
}

function clearLast() {
	let str = display.value;
	let newStr = str.slice(0, -1);
	display.value = newStr;
}
