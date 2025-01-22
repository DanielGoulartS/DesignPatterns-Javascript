export default class ProfileAbstractClass{
    constructor(){
        if(this.constructor === ProfileAbstractClass){
            throw new Error("Classe não instanciável.");
        }
        this.picURL = "./Template Method/Media/Daniel.jpg";
        this.name = "Daniel G. e Silva";
        this.information = undefined;
        this.color = undefined;
    }

    buildProfile(){
        var container = document.createElement("p");
        container.style.background = this.color;
        container.style.width = "150px";

        container.insertAdjacentElement("beforeend", this.buildPicture());
        container.insertAdjacentElement("beforeend", this.buildName());
        container.insertAdjacentElement("beforeend", this.buildInformation());
        container.insertAdjacentElement("beforeend", this.buildSocialMediaLogo());

        return container;
    }

    buildPicture(){
        var pic =  document.createElement("img");
        pic.src = this.picURL;
        pic.style.width = "90%";
        pic.style.margin = "5%";
        return pic;
    }

    buildName(){
        var pName = document.createElement("h5");
        pName.innerHTML = this.name;
        return pName;
    }

    buildSocialMediaLogo(){}

    buildInformation(){}
}