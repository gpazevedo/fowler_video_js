const  { RentalCalculator } = require ('./rentalCalculator');

class ChildremRentalCalculator extends RentalCalculator {
    get amount () {
        let result = 1.5;
        if (this.rental.days > 3) {
            result += (this.rental.days - 3) * 1.5;
        }
        return result;
        }
}
module.exports = {ChildremRentalCalculator}
