class System {
    constructor(userMap = {}) {
        this.users = userMap
    }
    addUser(userId, user) {
        this.users[userId] = user
    }
    getUser(userId) {
        return this.users[userId]
    }
}

module.exports = System;