import Pokemon from "./Pokemon.js";
import Charmeleon from "./Charmeleon.js";

export default class Charmander extends Pokemon{
    constructor(pokemonLife){
        super(pokemonLife);
        this.level = 1;
    }

    talk(){
        return "Charmander diz: Charmander!! :)<br>";
    }

    attack(){
        return "Charmander executa: Brasas!<br>";
    }

    evolve(){
        this.pokemonLife.pokemonState = new Charmeleon(this.pokemonLife);
        return "Uma luz brilha forte em Charmander, e de repende ...<br>";
    }
}