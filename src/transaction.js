class Transaction {
  // constructs a new Transaction object with a date, type and amount
  constructor(date, type, amount) {
    this.date = date;
    this.type = type;
    this.amount = amount;
  }

  // takes the balance as an argument and formats the transaction for display
  formatForDisplay(balance) {
    // converts the date object into a formatted string 
    const formattedDate = this.date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit'});
    // 'toFixed' displays the amount/balance with 2 decimal places
    const formattedAmount = this.amount.toFixed(2);
    const formattedBalance = balance.toFixed(2);

    let credit = '';
    let debit = '';
    // sets the credit or debit column based on transaction type
    if (this.type === 'credit') {
      credit = formattedAmount;
    } else {
      debit = formattedAmount;
    }
    // returns the formatted string
    return `${formattedDate} || ${credit} || ${debit} || ${formattedBalance}`;
  }

}

module.exports = Transaction;