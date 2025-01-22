import IteratorInterface from "./IteratorInterface.js";
export default class IteratorDirect{
    constructor(collection){
        super();
        this.collection = collection;
    }

    getNext(){
        if(this.collection[0] !== undefined){
            execute(this.this.collection[0]);
        }
        if(this.hasMore(this.collection)){
            this.getNext();
        }
    }
    hasMore(){

    }

    execute(element){
            var card = document.createElement("p");
            card.innerHTML = element.value;
            this.displayer.insertAdjacentElement("beforeend", card);
    }
}