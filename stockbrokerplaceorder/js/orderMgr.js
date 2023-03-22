const OrderValidator = require('./orderValidator');
const OrderExecutioner = require('./orderExecutioner');

class OrderMgr {
    constructor() {
        this.orderValidator = new OrderValidator();
        this.orderExecutioner = new OrderExecutioner();
    }

    placeOrder(userId, order) {
        if (this.orderValidator.validateOrder(userId, order)) {
            this.orderExecutioner.placeOrder(userId, order)
        }
    }
}

module.exports = OrderMgr;