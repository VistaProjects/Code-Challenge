// 1) Maak een string (1 punt)
let str = ''

for (let i = 26; i > 0; i--) {
	str += String.fromCharCode(i + 96)
}

console.log(str)
