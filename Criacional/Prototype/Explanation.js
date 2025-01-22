export default class Explanation{

constructor(text, target){
    this.text = text;
    this.target = target;
}

display(){
    document.querySelector(this.target).insertAdjacentText("beforeend", this.text);
}

prototypePattern(){
    var textClass = new Explanation(this.text, this.target);
    return textClass;
}

}