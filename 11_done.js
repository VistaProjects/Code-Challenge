// 11 Palindroom check (5 punten)
// Zoek op wat een palindroom is.

// Input: string
// Output: string is palindroom of niet

// Dus schrijf een willekeurige string (een woord of zin) en check of het een pallindroom is.

let palindrome = (str) => {
	let new_str = str.split('').reverse().join('')
	return new_str === str
}

console.log(palindrome('racecar'))
console.log(palindrome('abc'))