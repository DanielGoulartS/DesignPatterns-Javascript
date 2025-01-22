import PokemonLife from "./PokemonLife";
import Charmander from "./Charmander.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "State";
var explicacao = "&nbsp Em algoritmos onde o Comportamento do algoritmo " +
    "muda segundo a troca de Estados utiliza-se o padrão State para dissociar o Comportamento da " +
    "IDENTIFICAÇÃO do Estado. Isso se dá através da criação de classes próprias para cada Comportamento. " +
    "State permite fácil leitura e mudança de Comportamento para cada estado, e impede que " +
    "sua mudança associada a um estado comprometa outros Estados." +
    "<br> &nbsp Ex: O comportamento da Máquina de Estados da classe StateMachine permanece igual, " +
    "a diferença no Comportamento ocorre quando cada classe Estado State derivada da " +
    "interface StateInterface apesar de possuir os mesmos métodos os implementa de formas " +
    "distintas de acordo com o estado da Máquina.<br>&nbsp -A Diferença para o padrão Strategy se está " +
    "MUDANÇA DE ESTADO FEITA PELO ALGORITMO, portanto os estados tendem a ser previstos nos " +
    "comportamentos, enquanto o Strategy faz a mudança com o usuário.-<br><br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var life = new PokemonLife(undefined);
var charmander = new Charmander(life);
life.pokemonState = charmander;
setTimeout(() => {
    msg2.insertAdjacentHTML("beforeend", life.askPokemonToTalk());
    msg2.insertAdjacentHTML("beforeend", life.askPokemonToAttack());
    msg2.insertAdjacentHTML("beforeend", life.pokemonState.evolve());
}, 1000);
setTimeout(() => {
    msg2.insertAdjacentHTML("beforeend", life.askPokemonToTalk());
    msg2.insertAdjacentHTML("beforeend", life.askPokemonToAttack());
    msg2.insertAdjacentHTML("beforeend", life.pokemonState.evolve());
}, 3000);
setTimeout(() => {
    msg2.insertAdjacentHTML("beforeend", life.askPokemonToTalk());
    msg2.insertAdjacentHTML("beforeend", life.askPokemonToAttack());
    msg2.insertAdjacentHTML("beforeend", life.pokemonState.evolve());
}, 5000);