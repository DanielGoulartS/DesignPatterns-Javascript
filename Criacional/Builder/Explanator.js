export default class explanator{

    constructor(){
        this.header = undefined;
        this.title = undefined;
        this.display = undefined;
        this.explanation = undefined;
    }

    explain(){
        this.header.insertAdjacentText("afterbegin", this.title);
        this.display.insertAdjacentHTML("beforebegin", this.explanation);
    }
}