const Transaction = require('./transaction');

class Account {
  // constructs a new Account object with a balance of 0 and an empty array of transactions
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  // handles deposit by creating a credit transaction and updating the balance
  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Deposit amount must be greater than zero');
    } else {
      this.createTransaction('credit', amount);
    }
  }
  // handles withdrawal by creating a debit transaction and updating the balance
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be greater than zero');
    } 
    if (amount > this.balance) {
      throw new Error('Insufficient funds for withdrawal');
    }

    this.createTransaction('debit', amount);
  }
  // prints the account statement with formatted transactions
  printStatement() {
    const header = 'date || credit || debit || balance';
    let balance = this.balance;
    const formattedTransactions = [];
    // iterates through transactions in reverse order and formats each transaction
    for (let i = this.transactions.length - 1 ; i >= 0 ; i --) {
      const transaction = this.transactions[i];
      formattedTransactions.push(this.formatTransaction(transaction, balance));
      // updates the balance for the next transaction in the iteration (in reverse order)
      if (transaction.type === 'credit') {
        // the credit type executes balance minus amount as the iteration is in reverse order
        balance -= transaction.amount;
      } else {
        balance += transaction.amount;
      }
    }

    return `${header}\n` +
           `${formattedTransactions.join('\n')}`;
  }
  // creates a transaction and updates the balance
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
  // formats the transactions for display
  formatTransaction(transaction, balance) {
    return transaction.formatForDisplay(balance);
  }

}

module.exports = Account;