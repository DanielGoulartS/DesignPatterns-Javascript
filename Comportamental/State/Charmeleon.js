import Pokemon from "./Pokemon.js";
import Charizard from "./Charizard.js";

export default class Charmeleon extends Pokemon{
    constructor(pokemonLife){
        super(pokemonLife);
        this.level = 2;
    }

    talk(){
        return "Charmeleon diz: Raawrmmm!! `^´ <br>";
    }

    attack(){
        return "Chameleon executa: Lança chamas!<br>";
    }

    evolve(){
        this.pokemonLife.pokemonState = new Charizard(this.pokemonLife);
        return "Charmeleon se agita e num piscar de olhos ...<br>";
    }
}