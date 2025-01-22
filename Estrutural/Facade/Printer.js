export default class Printer {

    constructor() {
    }

    printMessage(message, targetID){
        var target = document.querySelector(targetID);
        target.insertAdjacentHTML('beforeend', message);
    }

    print(messageToPrint, targetID) {
        var target = document.querySelector(targetID);
        target.insertAdjacentHTML('beforeend', "<br>Result:" + messageToPrint);
    }

}