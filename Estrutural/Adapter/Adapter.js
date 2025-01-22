export default class Adapter {

    /**
    * @param {Displayer} display 
    */
    constructor(displayer) {
        this.displayer = displayer;
    }
    display(text, component) {
        text = text.replace(/<.*?>/g, "");
        this.displayer.display(text, component);
    }
}