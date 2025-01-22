export default class ButtonInterface{
    constructor(text){
        this.text = text;
        if(this.execute == undefined){
            throw new TypeError("Esta classe InterfaceButton não pode ser instanciada.");
        }
    }
}