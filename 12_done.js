// 12 Recursief (sorteren) (10 punten)
// Zoek op wat recursief betekent!
// Zoek voorbeelden van recursieve functies.

// Input: rij (array) van getallen
// Output: getallen gesorteerd
// Methode: recursief

// Dus je maakt een functie die zichzelf steeds weer aanroept afhankelijk van de lengte van de array. De functie checkt of het aangeboden getal uit de array groter of kleiner is dan het vorige getal. Sla de getallen in de juiste volgorde op zodat de array gesorteerd is.


function Sort(array){
    if (array.length < 2) return array

	// getal is elk los getal in de array, en parameter is de array om te checken welk getal groter of kleiner is
    let [getal, ...parameters] = array

	console.log(parameters, getal)

	// Check met een filter of welk getal groter of lager is dan het current getal
    let laag = parameters.filter(n => n < getal)
    let hoog = parameters.filter(n => n > getal)


	// ... om alle parameters in de array te zetten
    return [...Sort(laag), getal, ...Sort(hoog)]
}
console.log(Sort([10, 50, 20, 30, 40, 25, 60]))