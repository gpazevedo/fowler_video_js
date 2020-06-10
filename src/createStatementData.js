const  { NewRentalCalculator} = require ('./newRentalCalculator');
const  { ChildremRentalCalculator} = require ('./childremRentalCalculator');
const  { RegularRentalCalculator} = require ('./regularRentalCalculator');

module.exports = {createStatementData}

function createStatementData (customer, movies) {

    const statementData = {};
    statementData.customer = customer.name;
    statementData.rentals = customer.rentals.map(enrichRentals);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalFrequentRenterPoints = totalFrequentRenterPoints(statementData);

     return statementData;

    function enrichRentals(aRental) {
        const calculator = createRentalCalculator (aRental, movieFor(aRental));
        let result = Object.assign({}, aRental);
        result.movie = calculator.movie;
        result.amount = calculator.amount;
        result.frequentRenterPoints = calculator.frequentRenterPointsFor;
        return result;
    }

     function createRentalCalculator(aRental, aMovie) {
        switch (aMovie.code) {
            case "new": return new NewRentalCalculator(aRental, aMovie);
            case "childrem": return new ChildremRentalCalculator(aRental, aMovie);
            case "regular": return new RegularRentalCalculator(aRental, aMovie);
        
            default:
                throw new Error ("Unknow movie code!");
        }
    };

    function movieFor(aRental) {
        return movies[aRental.movieID];
    }
  
    function totalFrequentRenterPoints (data) {
       return data.rentals.reduce((total, r) => total + r.frequentRenterPoints,0);
    }

    function totalAmount(data) {
        return data.rentals.reduce ((total, r) => total + r.amount, 0);
    }
}
