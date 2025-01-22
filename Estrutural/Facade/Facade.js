import Adder from './Adder.js';
import Subtractor from './Subtractor.js';
import Multiplier from './Multiplier.js';
import Divider from './Divider.js';
import Printer from './Printer.js';

export default class Facade {

    constructor() {
        this.adder = new Adder();
        this.subtractor = new Subtractor();
        this.multiplier = new Multiplier();
        this.divider = new Divider();
        this.printer = new Printer();
    }

    setNum(num) {
        this.num = num;
    }

    plus(num) {
        this.num = this.adder.add(this.num, num);
        this.printer.print(this.num, "#msg2");
    }

    minus(num) {
        this.num = this.subtractor.subtract(this.num, num);
        this.printer.print(this.num, "#msg2");
    }

    multiply(num) {
        this.num = this.multiplier.times(this.num, num);
        this.printer.print(this.num, "#msg2");
    }

    divide(num) {
        this.num = this.divider.divideBy(this.num, num);
        this.printer.print(this.num, "#msg2");
    }
}