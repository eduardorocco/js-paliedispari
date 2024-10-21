//Palidroma
//Chiedere all’utente di inserire una 
//parola Creare una funzione per capire se la parola inserita è palindroma

console.log('Palindroma')

const parola = prompt('Inserisci una parola e ti dirò se è palindroma.')
console.log(parola)

if (isPalindrome(parola)) {
	console.log(`La parola '${parola}' è palindroma`)
} else {
	console.log(`La parola '${parola}' non è palindroma`)
}

function stringReverse(text) {
	let newText = ''
	
	for (let i = 0; i < text.length; i++) {
		const char = text.at(-i - 1)
		
		newText += char
	}
	return newText
}

function isPalindrome(word) {
	word = word.toLowerCase()
	const reversedWord = stringReverse(word)
	console.log(word)
	console.log(reversedWord)

	if (word === reversedWord) {
		return true
	} else {
		return false
	}

}

