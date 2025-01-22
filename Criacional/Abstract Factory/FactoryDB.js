import ButtonDel from "./ButtonDel.js";
import FactoryInterface from "./FactoryInterface.js";
export default class DBFactory extends FactoryInterface{
    constructor(){
        super();
    }
    generate(){
        let btf = new ButtonDel("Delete");
        let bt = document.createElement("input");
        bt.setAttribute("value", btf.text);
        bt.setAttribute("type", "button");
        bt.addEventListener("click", btf.execute);
        return bt;
    }
}