const Account = require('../account');
const Transaction = require('../transaction');

describe('Account', () => {

  it('constructs a new Account with a balance of 0 and an empty array of transactions', () => {
    const account = new Account;

    expect(account.transactions).toEqual([]);
    expect(account.balance).toBe(0);
  });

  describe('deposit', () => {
    it('creates a new credit transaction, adds it to the transactions array and updates the balance', () => {
      const account = new Account;
      const amount = 100;

      account.deposit(amount);

      expect(account.transactions.length).toBe(1);
      expect(account.transactions[0]).toBeInstanceOf(Transaction);
      expect(account.transactions[0].amount).toBe(amount);
      expect(account.transactions[0].type).toBe('credit');
      expect(account.balance).toBe(amount);
    });

    it('throws an error if the deposit amount is zero or negative', () => {
      const account = new Account;

      const firstAmount = 0;
      const secondAmount = -100;

      expect(() => account.deposit(firstAmount)).toThrow('Deposit amount must be greater than zero');
      expect(() => account.deposit(secondAmount)).toThrow('Deposit amount must be greater than zero');
    });
  });

  describe('withdraw', () => {
    it('creates a new debit transaction, adds it to the transactions array and updates the balance', () => {
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

    it('throws an error if the withdrawal amount is zero or negative', () => {
      const account = new Account;

      const firstAmount = 0;
      const secondAmount = -100;

      expect(() => account.withdraw(firstAmount)).toThrow('Withdrawal amount must be greater than zero');
      expect(() => account.withdraw(secondAmount)).toThrow('Withdrawal amount must be greater than zero');
    });
  });

  describe('printStatement', () => {
    it('prints a correctly formatted statement', () => {
      const account = new Account;
      
      const depositAmount = 200;
      account.deposit(depositAmount);

      const withdrawAmount = 100;
      account.withdraw(withdrawAmount);

      const display = 'date || credit || debit || balance\n' +
                      `${account.transactions[1].date.toLocaleDateString('en-GB')} ||  || 100.00 || 100.00\n` +
                      `${account.transactions[0].date.toLocaleDateString('en-GB')} || 200.00 ||  || 200.00`;

      expect(account.printStatement()).toBe(display);
    });
  });

});