export default  class InterfaceFactory{
    constructor(){
        if(this.constructor == InterfaceFactory){
            throw new TypeError("Classe abstrata não deve ser instanciada.");
        }
        if(this.generate == undefined){
            throw new TypeError("Classe abstrata não deve ser instanciada.");
        }
    }
}