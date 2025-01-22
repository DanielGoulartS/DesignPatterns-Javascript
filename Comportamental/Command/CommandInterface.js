export default class CommandInterface{
    constructor(){
        if(this.constructor === CommandInterface){
            throw new Error("Esta interface não deve ser instanciada.");
        }
    }

    execute(number){}
    undo(number){}

}