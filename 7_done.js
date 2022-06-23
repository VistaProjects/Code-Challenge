// 7 Fibonacci (3 punten)
// Zoek op wat de reeks van Fibonacci is en maak een algoritme dat deze afdrukt op het scherm. Doe dit voor 25 elementen. Je moet ze berekenen, niet uit een tabel halen.


// https://www.wikihow.com/Calculate-the-Fibonacci-Sequence

// F(n) = F(n-1) + F(n-2)
let F = n => {
	return n <= 2 ? 1 : F(n-1) + F(n-2)
}

// console.time("total")
// for (let i = 0; i < 44; i++) {
// 	console.log(i, F(i))
// }
// console.timeEnd("total")

console.log(F(10))