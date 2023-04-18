const Transaction = require('../transaction');

describe('Transaction', () => {

  it('constructs a new Transaction with a date, type and amount', () => {
    const date = new Date('2023-01-01');
    const type = 'credit';
    const amount = 100;

    const transaction = new Transaction(date, type, amount);

    expect(transaction.date).toEqual(date);
    expect(transaction.type).toBe(type);
    expect(transaction.amount).toBe(amount);
  });

});