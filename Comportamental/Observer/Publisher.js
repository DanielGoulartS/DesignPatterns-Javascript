import ObserverInterface from "./ObserverInterface";
export default class Publisher {
    constructor() {
        this.observers = [];
        this.value = undefined;
    }

    changeValue(value) {
        this.value = value;
        this.notifyObservers();
    }

    notifyObservers() {
        this.observers.forEach((observer) => observer.beUpdated(this.value));
    }

    insertObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(observer);
    }

}