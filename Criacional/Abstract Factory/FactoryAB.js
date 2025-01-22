import ButtonAdd from "./ButtonAdd.js"
import FactoryInterface from "./FactoryInterface.js";
export default  class ABFactory extends FactoryInterface{
    constructor(){
        super();
    }
    generate(){
        let btf = new ButtonAdd("Adicionar");
        let bt = document.createElement("input");
        bt.setAttribute("value", btf.text);
        bt.setAttribute("type", "button");
        bt.addEventListener("click", btf.execute);
        return bt;
    }
}