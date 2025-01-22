export default class Displayer{
    constructor(){
    }

    display(text, component){
        component.insertAdjacentText("beforeend", text);
    }
}