let exchangeConnectorInstance;

class ExchConnector {
    constructor() {
        if (exchangeConnectorInstance) {
            throw new Error("new Instance cannot be created")
        }
        exchangeConnectorInstance = this;
    }
    sendOrderToExchange(userId, order) {
        console.log("placing order in exchange")
    }
}

let ExchConnectorInstance = Object.freeze(new ExchConnector());

module.exports = ExchConnectorInstance;