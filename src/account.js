const Transaction = require('./transaction');

class Account {

  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    const date = new Date();
    const transaction = new Transaction(date, 'credit', amount);
    this.transactions.push(transaction);
    this.balance += amount;
  }

}

module.exports = Account;