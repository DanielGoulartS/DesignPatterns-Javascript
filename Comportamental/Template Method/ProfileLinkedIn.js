import ProfileAbstractClass from "./ProfileAbstractClass.js";
export default class ProfileLinkedIn extends ProfileAbstractClass{
    constructor(){
        super();
        this.color = "rgb(73, 133, 211)";
        this.picSMURL = "./Template Method/Media/LinkedIn.png";
    }

    buildInformation(){
        var pInformation = document.createElement("p");
        pInformation.innerHTML = "100 contatos;<br>Estudou em Estácio;<br>Empreendedor;";
        return pInformation;
    }

    buildSocialMediaLogo(){
        var picSM =  document.createElement("img");
        picSM.src = this.picSMURL;
        picSM.style.width = "20%";
        picSM.style.height = "10%";
        return picSM;
    }
}