export enum AccountTypes {
    Asset,
    Liability
}

export class Account {
    constructor(public name: string, public desc: string, public type: AccountTypes, public balance: number, public isDefault: boolean) {}
}