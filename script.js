// 1 užduotis
var vardas = prompt('Įrašyk savo vardą')
switch(true) {
    case vardas.length < 5:
        console.log('Short Name')
    break
    default: 
    console.log('Long Name')
}

// 2 užduotis/ 3 užduotis
var clientAge = prompt('Įrašyk savo amžių')
var legalAge = 18
switch(true) {
    case clientAge >= legalAge:
        console.log('Can drive')
    break
    default:
        console.log('Cannot drive')
    break
}

var result = (clientAge < 0 || clientAge > 120) ? 'Invalid Age' : (clientAge >= legalAge) ? 'Can Drive' : 'Cannot drive'

console.log(result)

// 4 užduotis
var phone = prompt('Įrašyk telefono pavadinimą')
var isIphoneUser

switch(phone) {
    case 'iPhone':
        isIphoneUser = true
    break
    default:
        isIphoneUser = false
}

console.log(isIphoneUser)