export default class Entidade {
    constructor() {
        if (this.constructor === Entidade) {
            throw new TypeError("Interface não instanciável.");
            return;
        }
    }

    getName() {
    }
    getCode() {
    }
    getFollow(component, checkedList) {
    }

    setName(name) {
    }
    setComputedStyle(code) {
    }
    follow(follower) {
    }


}