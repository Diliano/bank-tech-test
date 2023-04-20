const Account = require('./src/account');

const myAccount = new Account();

// Deposit 1000
myAccount.deposit(1000);
console.log('After depositing 1000:');
myAccount.printStatement();

// Withdraw 500
myAccount.withdraw(500);
console.log('After withdrawing 500:');
myAccount.printStatement();