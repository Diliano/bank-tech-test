const Transaction = require('./transaction');

class Account {

  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Deposit amount must be greater than zero');
    } else {
      this.createTransaction('credit', amount);
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be greater than zero');
    } 
    if (amount > this.balance) {
      throw new Error('Insufficient funds for withdrawal');
    }

    this.createTransaction('debit', amount);
  }

  printStatement() {
    const header = 'date || credit || debit || balance';
    let balance = this.balance;
    const formattedTransactions = [];
    
    for (let i = this.transactions.length - 1 ; i >= 0 ; i --) {
      const transaction = this.transactions[i];
      formattedTransactions.push(this.formatTransaction(transaction, balance));

      if (transaction.type === 'credit') {
        balance -= transaction.amount;
      } else {
        balance += transaction.amount;
      }
    }

    return `${header}\n` +
           `${formattedTransactions.join('\n')}`;
  }

  createTransaction(type, amount) {
    const date = new Date();
    const transaction = new Transaction(date, type, amount);
    this.transactions.push(transaction);

    if (type === 'credit') {
      this.balance += amount;
    } else {
      this.balance -= amount;
    }
  }

  formatTransaction(transaction, balance) {
    return transaction.formatForDisplay(balance);
  }

}

module.exports = Account;