// 20) Wissel inhoud van twee variabelen: Part 2 (1 punt)
// a="Frans" b="Duits"
// Maak een routine die deze 2 omwisselt

var switched = false
var a,b

setInterval(()=> {
	if (switched) {
		a = "Duits"
		b ="Frans"
		switched = false
	}
	else
	{		
		a = "Frans"
		b ="Duits"
		switched = true
	}

	console.log(a, b)
}, 750)