/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const smallPizzaSizeDiameterInches = 13;
const largerPizzaSizeDiameterInches = 17;
const smallPizzaAreaSquareInches = Math.PI * (smallPizzaSizeDiameterInches / 2) ** 2;
const largePizzaAreaSquareInches = Math.PI * (largerPizzaSizeDiameterInches / 2) ** 2;

console.log("small pizza area: ", smallPizzaAreaSquareInches);
console.log("large pizza area: ", largePizzaAreaSquareInches);

// 2. What is the cost per square inch of each pizza?
const smallPizzaCost = 16.99;
const largePizzaCost = 19.99;
const smallPizzaCostPerSquareInch = smallPizzaCost / smallPizzaAreaSquareInches;
const largePizzaCostPerSquareInch = largePizzaCost / largePizzaAreaSquareInches;
console.log("small pizza cost per square inch: ", smallPizzaCostPerSquareInch);
console.log("large pizza cost per square inch: ", largePizzaCostPerSquareInch);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const cardsInASuit = 13;
randomCard = Math.ceil(Math.random() * cardsInASuit);

console.log("random card test: ", randomCard);

// 4. Draw 3 cards and use Math to determine the highest
// card
const card1 = Math.ceil(Math.random() * cardsInASuit);
const card2 = Math.ceil(Math.random() * cardsInASuit);
const card3 = Math.ceil(Math.random() * cardsInASuit);
const highestCard = Math.max(card1, card2, card3);

console.log("random card 1: ", card1);
console.log("random card 2: ", card2);
console.log("random card 3: ", card3);
console.log("highest card: ", highestCard);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'Rick';
const lastName = 'Steves';
const streetAddress = '12345 Log Lane';
const city = 'Twin Peaks';
const state = 'WA';
const zipCode = '91234';
const address = `${firstName} ${lastName}\n${streetAddress}\n${city}, ${state} ${zipCode}`;

console.log(address);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const words = address.split(' ');
const fName = words[0];

console.log(fName);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);
const startDateMilliseconds = startDate.getTime();
const endDateMilliseconds = endDate.getTime();
const timeDifference = endDateMilliseconds - startDateMilliseconds;
const middleDateMilliseconds = startDateMilliseconds + (timeDifference / 2);
const middleDate = new Date(middleDateMilliseconds);

console.log(middleDate);