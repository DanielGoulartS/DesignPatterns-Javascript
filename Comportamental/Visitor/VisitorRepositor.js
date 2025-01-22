import Visitor from "./Visitor";

export default class VisitorRepositor extends Visitor{
    constructor(){
        super();
    }

    iterateClothes(product){
        let action = "Repondo ";

        return action + product.name + " da grife, aguarde.<br>";
    }

    iterateFood(product){
        let action = "Repondo ";

        return action + product.name + " fresca, aguarde.<br>";
    }

    iterateEletronics(product){
        let action = "Repondo ";

        return action + product.name + " funcionando, aguarde.<br>";
    }
}