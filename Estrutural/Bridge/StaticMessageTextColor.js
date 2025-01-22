export default class StaticMessageTextColor{

constructor(text){
    this.text = text;
    this.color = "gray";
}

exibir(component){
    var paragr = document.createElement("p");
    paragr.innerHTML = this.text;
    paragr.style.color = this.color;

    component.insertAdjacentElement("beforeend", paragr);
}

}