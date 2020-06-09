///////////////////////////////////////////////////////////////////////////////
//
//   Refactoring Chapter 1
//
///////////////////////////////////////////////////////////////////////////////

const  { statement } = require ('./statement');


const result = 
`Rental Record for martin
\tRan\t3.5
\tTrois Couleurs: Bleu\t2
Amount owed is 5.5
You earned 2 frequent renter points
`;

// Get the plays
const movies = require('./movies.json');

// Get the invoices
const customer = require('./customer.json');

let invoice_msg = statement (customer, movies);

test ('Total Statement', () => {
    expect(invoice_msg).toEqual(result);
});
