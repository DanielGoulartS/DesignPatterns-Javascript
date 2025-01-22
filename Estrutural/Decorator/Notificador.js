import NotificadorInterface from "./NotificadorInterface";

export default class Notificador extends NotificadorInterface{
    constructor() {
        super();
    }

    notificar() {
        var explicacao = "O Decorator assimila-se ao Composite pois utiliza da referência de objetos " +
        "para gerar recursividade, sua diferença encontra-se na variedade das classes filhas. " +
        "Enquanto Composite insita a recursividade e referência, o Decorator foca " +
        "na alteração de seus comportamentos visto que muitas classes diferentes herdarão " +
        "a classe base / interface, e ainda assim poderão alterar seus comportamentos internamente. " +
        "A aplicação deste padrão ajuda a criar novos comportamentos sem alterar código escrito, " +
        "mas gera tamanho e novos trechos de código.";
        console.log(explicacao);
    }
}