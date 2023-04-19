const Account = require('../account');
const Transaction = require('../transaction');

describe('Account', () => {

  it('constructs a new Account with a balance of 0 and an empty array of transactions', () => {
    const account = new Account;

    expect(account.transactions).toEqual([]);
    expect(account.balance).toBe(0);
  });

  describe('deposit', () => {
    it('creates a new transaction, adds it to the transaction array and updates the balance', () => {
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

});