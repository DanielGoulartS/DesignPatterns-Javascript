export default class Pokemon{
    constructor(pokemonLife){
        if(this.constructor === Pokemon){
            throw new Error("Interface não instanciável.");
        }
        this.pokemonLife = pokemonLife;
    }

    talk(){}
    attack(){}
    evolve(){}
}