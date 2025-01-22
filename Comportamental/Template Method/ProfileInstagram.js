import ProfileAbstractClass from "./ProfileAbstractClass.js";
export default class ProfileInstagram extends ProfileAbstractClass{
    constructor(){
        super();
        this.color = "rgb(197, 81, 178)";
        this.picSMURL = "./Template Method/Media/Instagram.png";
    }

    buildInformation(){
        var pInformation = document.createElement("p");
        pInformation.innerHTML = "100 fotos;<br>279 seguidores;<br>seguindo 280;";
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