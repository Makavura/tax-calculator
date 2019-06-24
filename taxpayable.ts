class PayTax {
    taxableIncome: number;
    taxPayable: number;
    taxRate: number;

    constructor (taxableIncome: number) {
        this.taxableIncome = taxableIncome;
    }

    computeTaxRates() {
        if (this.taxableIncome <=  12298) {
            this.taxRate = 0.10;
            this.taxPayable = this.taxableIncome * this.taxRate;
            return this.taxPayable;
        } else if (this.taxableIncome >= 12299 && this.taxableIncome <= 23885 ) {
            this.taxRate = 0.15;
            var x = 12298;
            var y = this.taxableIncome - 12299
            this.taxPayable = ((x * 0.10) + (y * this.taxRate))
            return this.taxPayable 
        } else if (this.taxableIncome >= 23886 && this.taxableIncome <= 35472 ) {
            this.taxRate = 0.20;
            var x = 12998;
            var y = 23885 - 12299;
            var z  = this.taxableIncome - 23886;
            this.taxPayable = ((x * 0.10) + (y * 0.15) + (z * 0.20));
            return this.taxPayable;
        } else if (this.taxableIncome >= 35473 && this.taxableIncome <= 47059 ) {
            this.taxRate = 0.25;
            var w = 12298;
            var x = 23885 - 12299;
            var y = 35472 - 23886;
            var z = this.taxableIncome - 35473;
            this.taxPayable = (w * 0.10) + (x * 0.15) + (y * 0.20) + (z * 0.25);
            return this.taxPayable; 
        } else {
            this.taxRate - 0.30;
            var v = 12298;
            var w = 23885 - 12299;
            var x = 35472 - 23885;
            var y = 47059 - 35473;
            var z = this.taxableIncome - 47059;
            this.taxPayable = ((v * 0.10) + (w * 0.15) + (x * 0.20) + (y * 0.25) + (z * 0.30));
            return this.taxPayable;
        }

    }
}