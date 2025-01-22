export default class BuilderElements {
    /**
     * @param {Explanator} explanator - The Explanator
    */
    constructor(explanator){
        this.explanator = explanator;
        this.header = document.querySelector("header");
        this.display = document.querySelector("#msg1");
    }

    buildHeader() {
        console.log("Build Header");
        this.explanator.header = this.header;
    }

    buildDisplay() {
        console.log("Build Display");
        this.explanator.display = this.display;
    }
}