const  { createStatementData} = require ('./createStatementData');


function statement(customer, movies) {
  createStatementData (customer, movies);
  return statementText(customer, movies, createStatementData (customer, movies));
}

function statementText(customer, movies, data) {
    let result = `Rental Record for ${data.customer}\n`;

    for (let r of data.rentals) {
      //print figures for this rental
      result += `\t${r.movie.title}\t${r.amount}\n` ;
    }

    // add footer lines
    result += `Amount owed is ${data.totalAmount}\n`;
    result += `You earned ${data.totalFrequentRenterPoints} frequent renter points\n`;

    return result;
}

module.exports = {statement}