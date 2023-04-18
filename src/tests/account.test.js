const Account = require('../account');

describe('Account', () => {

  it('constructs a new Account with a balance of 0 and an empty array of transactions', () => {
    const account = new Account;

    expect(account.transactions).toEqual([]);
    expect(account.balance).toBe(0);
  });

});