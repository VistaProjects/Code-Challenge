// 5) Controleer telefoonnummer (2 punten)
// De invoer is een telefoonnummer. Controleer of dit een Nederlands of een Belgisch telefoonnummer is EN of het een mobiel nummer is.

// +32 Belgie
// +31 Nederland

let nummer = '+31 612345678'

switch(nummer.slice(0, 3)){
	case '+32':
		if (nummer.slice(4).length === 9) {
			console.log('Belgie met correct de lengte')
		} else console.log('Belgie, maar geen correct lengte')
		break
	case '+31':
		if (nummer.slice(4).length === 9) {
			console.log('Nederland met correct de lengte')
		} else console.log('Belgie, maar geen correct lengte')
		break
	default:
		if (nummer.slice(4).length === 9) {
			console.log('Onbekend')
		} else console.log('Onbekend, maar geen correct lengte')
}
