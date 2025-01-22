export default class Visitor{
    constructor(){
        if(this.constructor === Visitor){
            throw new Error("Interface não instanciável.");
        }
    }

    iterateClothes(product){}
    iterateFood(product){}
    iterateEletronics(product){}
}