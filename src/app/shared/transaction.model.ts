import { Account } from "./account.model";
import { Payee } from "./payee.model";
import { Category } from "./category.model";

export class Transaction {
    constructor(public date: Date, public payee: Payee, public category: Category, public account: Account, public amount: number) {}
}