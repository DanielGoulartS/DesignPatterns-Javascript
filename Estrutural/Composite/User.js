import Entidade from "./Entidade.js";
export default class User extends Entidade {
    constructor(name, code) {
        super();
        this.setName(name);
        this.setCode(code);
        this.follows = [];
    }

    getName() {
        return this.name;
    }
    getCode() {
        return this.code;
    }
    /**
    * @param {String[]} checkedList array
    */
    getFollow(component, checkedList) {

        var card = document.createElement("p");
        card.innerHTML = this.getName() + " follows:";
        checkedList.push(this);

        this.follows.forEach((follow) => {
            card.innerHTML += "<br>-" + follow.getName();
            if(!checkedList.includes(follow)){
                follow.getFollow(component, checkedList);
            }
            
        });

        component.insertAdjacentElement("beforeend", card);
    }


    setName(name) {
        this.name = name;
    }
    setCode(code) {
        this.code = code;
    }
    follow(follower) {
        this.follows[this.follows.length] = follower;
    }


}