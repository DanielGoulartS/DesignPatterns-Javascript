import ObserverInterface from "./ObserverInterface";

export default class Observer extends ObserverInterface{
    constructor(component, phrase){
        super();
        this.value = undefined;
        this.phrase = phrase;
        this.component = component;
    }

    beUpdated(value){
        this.value = value;
        this.component.insertAdjacentHTML("beforeend", this.phrase + value);
    }
}