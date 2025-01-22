import Pokemon from "./Pokemon.js";
export default class Charizard extends Pokemon{
    constructor(pokemonLife){
        super(pokemonLife);
        this.level = 3;
    }

    talk(){
        return "Charrizard diz: RRWWAAAGHHH!! *fogo e fumaça* <br>";
    }

    attack(){
        return "Charizard executa: Lança chamas!<br>";
    }

    evolve(){
        return "Charizard está pleno e não evoluirá mais.<br>";
    }
}