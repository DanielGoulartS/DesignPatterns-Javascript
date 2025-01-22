export default class Interface{
    constructor(){
        if(this.constructor === Interface){
            throw new TypeError("A Interface não pode ser instânciada.");
        }
    }

    display(component){
    }
}