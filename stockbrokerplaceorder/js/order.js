class Order {
    constructor(txnType, orderType, quantity, stock, exch) {
        this.txnType = txnType;
        this.orderType = orderType;
        this.quantity = quantity;
        this.stock = stock;
        // transacitns
        // ordertyoe statys
        // time
        this.exch = exch
    }
    getTxnType() {
        return this.txnType
    }
}

module.exports = Order