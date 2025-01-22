export default class Image{
    constructor(imageSrc, w, h, target){
        this.imageSrc = imageSrc;
        this.imageSrc.width = w;
        this.imageSrc.height = h;
        this.target = target;
    }

    draw(){
        this.target.insertAdjacentElement("beforeend", this.imageSrc);
    }
}