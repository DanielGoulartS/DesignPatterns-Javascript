export default class PokemonLife {
    construct(pokemonState) {
        this.pokemonState = pokemonState;
    }

    evolvePokemon() {
        switch (this.pokemonState.level) {
            case 1:
                this.pokemonState.evolve();
                break;
            case 2:
                this.pokemonState.evolve();
                break;
            case 3:
                this.pokemonState.evolve();
                break;
        }
        this.pokemonState.talk();
    }

    askPokemonToAttack() {
        this.pokemonState.attack();
    }

    askPokemonToTalk() {
        this.pokemonState.talk();
    }
}