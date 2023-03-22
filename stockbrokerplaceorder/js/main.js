const User = require('./user');
const Stock = require('./stock');
const Order = require('./order');
const OrderMgr = require('./orderMgr');
const { EXCH, TXT_TYPE, ORDER_TYPE } = require('./common');

function main() {
    const user = new User("Meg");
    const stock = new Stock("TCS", 1000, EXCH.NSE);
    const order = new Order(TXT_TYPE.BUY, ORDER_TYPE.LIMIT, 1100, 20, stock, EXCH.NSE)
    const orderMgr = new OrderMgr();
    orderMgr.placeOrder(user.id, order);
    return 0
}

main();