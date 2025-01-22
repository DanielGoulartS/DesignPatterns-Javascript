export default class Stock {
    constructor() {
        this.wares = [];
    }

    addWare(ware) {
        this.wares.forEach(arrayWare => {
            if (arrayWare.name == ware.name) {
                arrayWare.amount += ware.amount;
                ware.amount = 0;
            }
        });
        if (ware.amount > 0) {
            this.wares.push(ware);
        }
        return "Mercadoria adicionada ao estoque!<br>";
    }

    removeWare(ware) {
        let count = 0;
        let bool = false;
        this.wares.forEach(arrayWare => {
            if (arrayWare.name == ware.name) {
                if (arrayWare.amount > ware.amount) {
                    arrayWare.amount -= ware.amount;
                    if (arrayWare.amount <= 0) {
                        this.wares.splice(count, 1);
                    }
                    bool = true;
                }
            }
            count++;
        });
        if (bool) {
            return "Mercadoria removida de Estoque.<br>";
        } else {
            return "Mercadoria não encontrada em Estoque.<br>";
        }
    }
}