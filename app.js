console.log('Pari e dispari')
/**
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */
// chiediamo all'utente di inserire 'pari' o 'dispari'
const sceltaUtente = prompt('Scrivi pari o dispari')

const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))

console.log('scelta: ', sceltaUtente)

console.log('numero utente: ', numeroUtente)

const numeroPC = getRandomIntInclusive(1, 5)

console.log('numero pc:', numeroPC)
const somma = numeroPC + numeroUtente
console.log('somma:', somma)

let message = 'Hai perso!'
if (userWins(somma, sceltaUtente)) {
	message = 'Hai vinto'
}

console.log(message)

function userWins(somma, sceltaUtente) {

	if (isEven(somma) && sceltaUtente.toLowerCase() === 'pari') {
		return true
	}

	if (!isEven(somma) && sceltaUtente.toLowerCase() === 'dispari') {
		return true
	}

	return false
}
function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}
function isEven(num) {
	return num % 2 === 0

}




























