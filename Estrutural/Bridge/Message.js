export default class Message {

    constructor(Text, Color) {
        this.Text = Text;
        this.Color = Color;
    }

    exibir(component){
        var paragr = document.createElement("p");
        paragr.innerHTML = this.Text.text;
        paragr.style.color = this.Color.color;

        component.insertAdjacentElement("beforeend", paragr);
    }
    //outros métodos e propriedades
}