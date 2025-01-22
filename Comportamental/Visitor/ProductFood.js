import Product from "./Product";

export default class ProductFood extends Product{
    constructor(name, price){
        super();
        this.name = name;
        this.price = price;
    }

    acceptIteration(visitor){
        return visitor.iterateFood(this);
    }
}