// 8 Priemgetallen (3 punten)
// Maak een applicatie die alle priemgetallen < 100 op het scherm weergeeft. Je moet ze berekenen, niet uit een tabel halen.'



// https://www.vedantu.com/maths/how-to-find-prime-numbers
let prime = (number) => {
	// Begin bij 2 en loop en loop als het kleiner is dan de ingevoerde getal
	for (let i = 2; i < number; i++) {
		// console.log(i, number)
		// Als het getal niet deelbaar is door i, dan is het priemgetal
		if (number % i === 0) {
			return false
		}
	}
	return true
}

var numbers = []

for (let i = 0; i < 100; i++) {
	if (prime(i)) numbers.push(i)
}
console.log(numbers)