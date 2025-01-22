import Interface from "./Interface.js";
export default class Data{
    constructor(){
        this.title = "title";
        this.explicacao = "explicacao";
        this.fake = "fake information";
    }

    display(text, component){
        component.innerHTML = text;
    }
}