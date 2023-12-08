/* sophisticated_code.js */

// This code is an example of a complex banking system that manages accounts, transactions, and transfers between accounts.

class Account {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`Deposit of ${amount}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(`Withdrawal of ${amount}`);
    } else {
      console.log("Insufficient funds to withdraw.");
    }
  }

  getTransactionHistory() {
    return this.transactions;
  }
}


class Bank {
  constructor() {
    this.accounts = {};
  }

  createAccount(accountNumber, accountHolder, initialBalance) {
    const account = new Account(accountNumber, accountHolder, initialBalance);
    this.accounts[accountNumber] = account;
    console.log(`Account ${accountNumber} created successfully.`);
  }

  deposit(accountNumber, amount) {
    if (this.accounts.hasOwnProperty(accountNumber)) {
      this.accounts[accountNumber].deposit(amount);
      console.log(`Deposit of ${amount} successful.`);
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }

  withdraw(accountNumber, amount) {
    if (this.accounts.hasOwnProperty(accountNumber)) {
      this.accounts[accountNumber].withdraw(amount);
      console.log(`Withdrawal of ${amount} successful.`);
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }

  transfer(sourceAccountNumber, targetAccountNumber, amount) {
    if (this.accounts.hasOwnProperty(sourceAccountNumber) && this.accounts.hasOwnProperty(targetAccountNumber)) {
      const sourceAccount = this.accounts[sourceAccountNumber];
      const targetAccount = this.accounts[targetAccountNumber];

      if (sourceAccount.balance >= amount) {
        sourceAccount.withdraw(amount);
        targetAccount.deposit(amount);

        console.log(`Transfer of ${amount} from account ${sourceAccountNumber} to account ${targetAccountNumber} successful.`);
      } else {
        console.log("Insufficient funds to transfer.");
      }
    } else {
      console.log("One or both account numbers do not exist.");
    }
  }

  getAccountBalance(accountNumber) {
    if (this.accounts.hasOwnProperty(accountNumber)) {
      return this.accounts[accountNumber].balance;
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }

  getAccountTransactionHistory(accountNumber) {
    if (this.accounts.hasOwnProperty(accountNumber)) {
      return this.accounts[accountNumber].getTransactionHistory();
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }
}

// Creating the bank and multiple accounts
const bank = new Bank();
bank.createAccount("123456", "John Doe", 1000);
bank.createAccount("987654", "Jane Smith", 500);

// Performing various operations on the accounts
bank.deposit("123456", 500);
bank.withdraw("987654", 200);
bank.transfer("987654", "123456", 300);

// Retrieving account balances and transaction histories
console.log("Account balances:");
console.log("123456:", bank.getAccountBalance("123456"));
console.log("987654:", bank.getAccountBalance("987654"));

console.log("Transaction history for account 123456:");
console.log(bank.getAccountTransactionHistory("123456"));