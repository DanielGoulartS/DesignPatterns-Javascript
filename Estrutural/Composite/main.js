import Entidade from "./Entidade";
import Page from "./Page";
import User from "./User";


var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Composite";
var explicacao = "Neste padrão de projeto, utiliza-se de objetos apontando objetos " +
    "para criar um tipo de repetição. <br>Composite trata-se apenas de criar uma estrutura de árvore " +
    "em seu projeto, tratando os objetos como 'containers' de outros objetos ou como 'objetos " +
    "finais'.<br> Utiliza-se uma mesma interface para estes dois tipos de objetos, e portanto " +
    "utiliza-se desta recursividade dos mesmos.<br> Ex: Apesar de não ser uma árvore binária " +
    "com raíz bem definida e folhas finais, esta é uma árvore ou uma estrutura de grafos " +
    "em que cada elemento aponta para outros, como uma rede social. Aqui os elementos foram " +
    "feitos todos em uma mesma interface e executam apenas um mesmo método para exibir informações.";

header.insertAdjacentHTML("beforeend", title);
msg1.insertAdjacentHTML("beforeend", explicacao);

let pedro = new User("Pedro", 1);
let tiagoz = new User("Tiago Z", 2);
let joao = new User("João", 3);
let judast = new User("Judas T", 4);
let judasi = new User("Judas I", 5);
let andre = new User("André", 6);
let tiagoa = new User("Tiago A", 7);
let filipe = new User("Filipe", 8);
let bartolomeu = new User("Bartolomeu", 9);
let tome = new User("Tomé", 10);
let mateus = new User("Mateus", 11);
let simao = new User("Simão", 12);
let memesCristaos = new Page("Memes Cristãos", 13);
let memesPagaos = new Page("Memes Pagãos", 14);
let memes = new Page("Memes", 15);

settingUp();

memesCristaos.getFollow(msg2, []);

function settingUp() {

    pedro.follow(tiagoz);
    pedro.follow(joao);
    pedro.follow(andre);
    pedro.follow(memesCristaos);

    tiagoz.follow(joao);
    tiagoz.follow(tiagoz);
    tiagoz.follow(andre);

    joao.follow(andre);
    joao.follow(tiagoz);
    joao.follow(pedro);
    joao.follow(memes);

    judast.follow(pedro);
    judast.follow(memes);
    judast.follow(memesCristaos);

    judasi.follow(memes);
    judasi.follow(tiagoa);
    judasi.follow(mateus);

    andre.follow(memes);
    andre.follow(memesCristaos);
    andre.follow(judasi);
    andre.follow(pedro);
    andre.follow(tome);

    tiagoa.follow(filipe);
    tiagoa.follow(judasi);
    tiagoa.follow(joao);
    tiagoa.follow(mateus);

    filipe.follow(mateus);
    filipe.follow(tome);
    filipe.follow(simao);
    filipe.follow(memesCristaos);

    bartolomeu.follow(simao);
    bartolomeu.follow(judast);
    bartolomeu.follow(pedro);
    bartolomeu.follow(memes);

    tome.follow(simao);
    tome.follow(judast);
    tome.follow(andre);
    tome.follow(filipe);

    mateus.follow(filipe);
    mateus.follow(joao);
    mateus.follow(tiagoa);

    simao.follow(tiagoa);
    simao.follow(filipe);

    memesCristaos.follow(pedro);
    memesCristaos.follow(tiagoz);
    memesCristaos.follow(joao);
    memesCristaos.follow(judast);
    memesCristaos.follow(judasi);
    memesCristaos.follow(andre);
    memesCristaos.follow(tiagoz);
    memesCristaos.follow(filipe);
    memesCristaos.follow(bartolomeu);
    memesCristaos.follow(tome);
    memesCristaos.follow(mateus);
    memesCristaos.follow(simao);

    memesPagaos.follow(memes);
    memesPagaos.follow(memesCristaos);

    memes.follow(memesCristaos);
    memes.follow(memesPagaos);
    memes.follow(andre);
    memes.follow(judasi);
    memes.follow(tiagoz);
}




/*
*/