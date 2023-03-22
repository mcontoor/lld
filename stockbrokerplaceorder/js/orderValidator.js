const { TXT_TYPE } = require('./common');
const System = require('./system');

class OrderValidator {
    validateOrder(userId, order) {
        const sys = new System();
        const user = sys.getUser(userId);
        if (order.getTxnType() == TXT_TYPE.BUY) {
            console.log("checking if user has funds to buy")
        } else {
            console.log("checking if us user has stocks to sell")
        }
        console.log("assuming user has made valid request")
        return true
    }
}

module.exports = OrderValidator;