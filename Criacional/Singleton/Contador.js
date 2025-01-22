export default class Contador{

    constructor(){
        Contador.num = 0;
        Contador.element = document.querySelector("#msg2");

        console.log("A");
    }
    
    static getInstance(){
        if (Contador.instance == null) {
            Contador.instance = new Contador();
        }
        return Contador.instance;
    }

    buildButton(nome, cor){
        var bt = document.createElement("input");
        bt.setAttribute("type", "button");
        bt.setAttribute("value", nome);
        bt.style.backgroundColor = cor;
        bt.style.color = "white";
        bt.addEventListener("click", ()=>{this.alterData()});
        return bt;
    }

    alterData(){
        Contador.element.innerHTML = "<p>" + ++Contador.num + "</p>";
    }


}