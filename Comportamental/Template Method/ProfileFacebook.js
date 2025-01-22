import ProfileAbstractClass from "./ProfileAbstractClass.js";
export default class ProfileFacebook extends ProfileAbstractClass {
    constructor() {
        super();
        this.color = "rgb(65, 95, 192)";
        this.picSMURL = "./Template Method/Media/Facebook.png";
    }

    buildInformation() {
        var pInformation = document.createElement("p");
        pInformation.innerHTML = "Solteiro;<br>100 amigos em comum;";
        return pInformation;
    }

    buildSocialMediaLogo(){
        var picSM =  document.createElement("img");
        picSM.src = this.picSMURL;
        picSM.style.width = "20%";
        picSM.style.height = "10%";
        picSM.style.marginTop = "10%";
        return picSM;
    }

}