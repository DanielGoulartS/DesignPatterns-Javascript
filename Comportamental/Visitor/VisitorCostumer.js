import Visitor from "./Visitor";

export default class VisitorCostumer extends Visitor{
    constructor(){
        super();
    }

    iterateClothes(product){
        let action = "";
        let num = Math.floor(Math.random() * 10);
        
        if(num % 2 == 0){
            action = "Comprando ";
        }else{
            action = "Experimentando ";
        }

        return action + product.name + "!<br>";
    }
    iterateFood(product){
        let action = "Quero ";

        return action + product.name + "s , por favor!<br>";
    }

    iterateEletronics(product){
        let action = "Busco ";

        return action + product.name + ".<br>";
    }
}