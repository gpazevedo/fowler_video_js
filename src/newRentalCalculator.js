const  { RentalCalculator } = require ('./rentalCalculator');

class NewRentalCalculator extends RentalCalculator {
    get amount () {
        return this.rental.days * 3;
    }
    get frequentRenterPointsFor() {
        return (this.rental.days > 2) ? 2 : 1;
    };
}
module.exports = {NewRentalCalculator}
