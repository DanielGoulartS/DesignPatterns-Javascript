import ButtonAdd from "./ButtonAdd.js"
export default  class ABFactory{
    constructor(){
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