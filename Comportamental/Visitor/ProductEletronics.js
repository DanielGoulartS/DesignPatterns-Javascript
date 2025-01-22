import Product from "./Product";

export default class ProductEletronics extends Product{
    constructor(name, price){
        super();
        this.name = name;
        this.price = price;
    }

    acceptIteration(visitor){
        return visitor.iterateEletronics(this);
    }
}