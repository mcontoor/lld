const ExchConnectorInstance = require('./exchConnector');

class OrderExecutioner {
    placeOrder(userId, order) {
        ExchConnectorInstance.sendOrderToExchange(userId, order)
    }
}

module.exports = OrderExecutioner;