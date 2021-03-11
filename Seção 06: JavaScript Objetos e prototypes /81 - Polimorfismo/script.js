//Superclass

function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withDraw = function(value) {
    if(value > this.balance) {
        console.log(`Saldo insuficiente: ${this.balance}`);
        return;
    }

    this.balance -= value;
    this.seeBalance();
};

Account.prototype.deposit = function(value) {
    this.balance += value;
    this.seeBalance();
};

Account.prototype.seeBalance = function() {
    console.log(`Ag/C: ${this.agency}/${this.account} | Saldo: R$${this.balance.toFixed(2)}`);
};

function CheckingAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;

}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;


CheckingAccount.prototype.withDraw = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log(`Saldo insuficiente: ${this.balance}`);
        return;
    }
    
    this.balance -= value;
    this.seeBalance();
};

function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;


const checkingAccount = new CheckingAccount(11, 22, 0, 100);
checkingAccount.deposit(10);
checkingAccount.withDraw(1);

console.log('\n\n');

const savingsAccount = new SavingsAccount(12, 33, 0);
savingsAccount.deposit(100);
savingsAccount.withDraw(5);






















