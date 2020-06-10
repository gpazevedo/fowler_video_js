const  { RentalCalculator } = require ('./rentalCalculator');

class RegularRentalCalculator extends RentalCalculator {
    get amount () {
        let result = 2;
        if (this.rental.days > 2) {
            result += (this.rental.days - 2) * 1.5;
        }
        return result;
    }
}
module.exports = {RegularRentalCalculator}
