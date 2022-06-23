// 1 degree Fahrenheit = -17.2222222 degrees Celsius

// 14 Celcius naar fahrenheit (2 punten)
// Input: temperatuur in graden Celsius
// Output: temperatuur in °F en in K

// 1 degree Celsius = 33.8 degrees Fahrenheit

let calculateFH = (celsius) => {
	return [(celsius * 1.8 ) + 32, celsius ]
}

let calculateCL = (Fahrenheit) => {
	return [(Fahrenheit - 32) / 1.8, (Fahrenheit  + 459.67) * 5/9 ]
}
// T(K) = (T(°F) + 459.67)× 5/9
// https://www.rapidtables.com/convert/temperature/fahrenheit-to-kelvin.html


// console.log(calculateFH(100)) // 212 degrees Fahrenheit
console.log(calculateCL(150)) // 37.7777778 degrees Celsius
console.log(calculateFH(150)) // 37.7777778 degrees Celsius