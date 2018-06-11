//
// Object destruction
//

// const person = {
//     name: 'Filipe',
//     age: 35,
//     location: {
//         city: 'Dublin',
//         temp: 18
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName); //Penguin, Self-Publisher

//--------------------------------------------------------------------------------

//
// Array destruction
//

const address = ['22 Rathdown Square', 'Dublin', 'Dublin']
const [ , city, , country = 'Ireland'] = address;
console.log(`You are in ${city} ${country}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
