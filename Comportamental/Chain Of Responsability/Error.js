export default class Error {
    constructor(code) {
        this.code = code;
        this.codes = [1, 2, 3, 4];
    }

    errorMessage() {
        switch (this.code) {
            case 1:
                return "Sem Internet - Error Code: 01 - Sinal Desconfigurado.";
            case 2:
                return "Sem Internet - Error Code: 02 - Driver Ultrapassado.";
            case 3:
                return "Sem Internet - Error Code: 03 - Adaptador Desligado.";
            case 4:
                return "Sem Internet - Error Code: 04 - Conexão Inválida.";
            default:
                return " Sem Internet - Erro não identificado.";
        }
    }
}