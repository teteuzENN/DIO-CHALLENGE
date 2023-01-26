import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { NewAccount } from "./class/NewAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
const newAccount: NewAccount = new NewAccount("Lara", 30);

peopleAccount.deposit(10);
peopleAccount.getBalance();
peopleAccount.getName();
peopleAccount.setName("Julia");
peopleAccount.validateStatus();
peopleAccount.withdraw(5);

companyAccount.deposit(10);
companyAccount.getBalance();
companyAccount.getName();
companyAccount.setName("Clara");
companyAccount.validateStatus();
companyAccount.withdraw(5);

newAccount.deposit(100);
newAccount.getBalance();
newAccount.getName();
newAccount.setName("Joao");
newAccount.validateStatus();
newAccount.withdraw(5);
