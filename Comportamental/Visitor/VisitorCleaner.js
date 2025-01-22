import Visitor from "./Visitor";

export default class VisitorCleaner extends Visitor{
    constructor(){
        super();
    }

    iterateClothes(product){
        let action = "Limpando ";

        return action + product.name + "!<br>";
    }
    iterateFood(product){
        let action = "Protegendo ";

        return action + product.name + " de insetos, aguarde.<br>";
    }

    iterateEletronics(product){
        let action = "Tirando a poeira de ";

        return action + product.name + ", aguarde.<br>";
    }
}