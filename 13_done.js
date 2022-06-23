// 13 Oppervlakte berekenen (2 punten)
// Bereken de oppervlakte en omtrek van een cirkel met een gegeven Diameter.


// https://www.mathepower.com/nl/oppervlakteberekening.php
let calculate = (diameter) => {
	return Math.PI * Math.pow(diameter / 2, 2)
}

console.log(calculate(10))