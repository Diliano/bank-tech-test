const Account = require('../account');
const Transaction = require('../transaction');

describe('Account', () => {

  it('constructs a new Account with a balance of 0 and an empty array of transactions', () => {
    const account = new Account;

    expect(account.transactions).toEqual([]);
    expect(account.balance).toBe(0);
  });

  describe('deposit', () => {
    it('creates a new credit transaction, adds it to the transaction array and updates the balance', () => {
      const account = new Account;
      const amount = 100;

      account.deposit(amount);

      expect(account.transactions.length).toBe(1);
      expect(account.transactions[0]).toBeInstanceOf(Transaction);
      expect(account.transactions[0].amount).toBe(amount);
      expect(account.transactions[0].type).toBe('credit');
      expect(account.balance).toBe(amount);
    });
  });

  describe('withdraw', () => {
    it('creates a new debit transaction, adds it to the transaction array and updates the balance', () => {
      const account = new Account;

      const depositAmount = 200;
      account.deposit(depositAmount);

      const withdrawAmount = 100;
      account.withdraw(withdrawAmount);

      expect(account.transactions.length).toBe(2);
      expect(account.transactions[1]).toBeInstanceOf(Transaction);
      expect(account.transactions[1].amount).toBe(withdrawAmount);
      expect(account.transactions[1].type).toBe('debit');
      expect(account.balance).toBe(100);
    });
  });

});