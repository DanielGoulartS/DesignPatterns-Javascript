import Ware from "./Ware.js";
export default class Seller {
    constructor(stock, cart) {
        this.stock = stock;
        this.cart = cart;
    }

    checkWares(array) {
        let result = "-------------<br>";
        result = result + "Mercadorias:<br>";
        array.forEach(ware => {
            result = result + ("-Nome: " + ware.name + "<br>" +
                "-Quantia: " + ware.amount + "<br>" +
                "-Preço: R$ " + ware.price + ",00<br><br>");
        });
        result = result + "-------------<br>";
        return result;
    }

    pay() {
        this.cart.wares.forEach(cartWare => {
            this.stock.wares.forEach(stockWare => {
                if (stockWare.name === cartWare.name) {
                    if (stockWare.amount < cartWare.amount) {
                        return "Não há " + cartWare.name + " em estoque. Remova e tente novamente.";
                    } else {
                        this.stock.removeWare(cartWare);
                        this.cart.removeWare(cartWare);
                    }
                }
            });
        });
        return "Pagamento afetuado.<br>Obrigado pela preferência. Volte sempre!";
    }

    giveMe(amount, ware) {
        let returnValue = "";
        returnValue = returnValue + (this.stock.removeWare(new Ware(ware.name, ware.price, amount)));
        if (!returnValue.includes("não")) {
            returnValue = returnValue + (this.cart.addWare(new Ware(ware.name, ware.price, amount)));
        }

        return returnValue;
    }

    takeBack(amount, ware) {
        let returnValue = "";
        returnValue = returnValue + (this.cart.removeWare(new Ware(ware.name, ware.price, amount)));
        if(!returnValue.includes("não")){
            returnValue = returnValue + (this.stock.addWare(new Ware(ware.name, ware.price, amount)));
        }
        return returnValue;
    }
}