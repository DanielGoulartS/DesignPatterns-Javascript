export default class IteratorInterface{
    constructor(){
        if(this.constructor === IteratorInterface){
            throw(new Error("Esta interface não deve ser instanciada."));
        }
    }
    getNext(){}
    hasMore(){}
    execute(element){}
}