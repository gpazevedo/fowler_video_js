///////////////////////////////////////////////////////////////////////////////
//
//   Refactoring Chapter 1
//
///////////////////////////////////////////////////////////////////////////////

const  { statement} = require ('./statement');

// Get the movies
const movies = require('./movies.json');

// Get the customer
const customer = require('./customer.json');

let invoice_msg = statement (customer, movies);
console.log (invoice_msg);
