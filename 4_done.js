// 4) Bubblesort (4 punten)

//vb: input="test" output="estt"
//vb: input='3618' output='1368'

//console.log("test".split('').sort().join('')) // estt - 1368

const Bubblesort = (input) => {
	// Creeer een array van de input
	let array = input.split('')

	// Loop over de lengte van de string
	for (let i = 0; i < array.length; i++) {

		// Loop nog een keer over de lengte van de string maar dan in de omgekeerde richting
		for (let x = 0; x < array.length - i; x++) {
			console.log(i, x, array[x], array[i])
			// Check of de eerste letter groter is dan de volgende letter
			if (array[x] > array[x + 1]) {
				let temp = array[x];
				array[x] = array[x + 1];
				array[x + 1] = temp;
			}
		}
	}
	return array.join('');
}

console.log(Bubblesort("1z5yx3wvutsr7qponm4lkjihgf2edcba"));