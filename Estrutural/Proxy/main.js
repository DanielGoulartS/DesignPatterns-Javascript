import Data from "./Data.js";
import Proxy from "./Proxy.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var data = new Data();
data.title = "Proxy";
data.explicacao = "Proxy é utilizado para controlar o acesso a uma classe ou serviço, " +
    "e funciona bem como o Composite, mas sem uma extensa lista de elementos. Aqui o foco está " +
    "em criar uma classe (de mesma interface) da sua classe real, que receba a classe real, e " +
    "implemente seus métodos, mas fazendo as alterações ou controles necessários para acessar " +
    "o serviço real. Muito útil para controlar acessos a bancos de dados, serviços delicados, " +
    "tratamento de dados e distribuição. " +
    "<br>Ex: O proxy impediu que um ou mais informações fossem substituidas na página, " +
        "enquanto a fonte de dados deixaria a perda de dados acontecer.";

var proxy = new Proxy(data);

data.display(data.title, header);
data.display(data.explicacao, msg1);
proxy.display(data.fake, msg1);
proxy.display(data.fake, msg2);