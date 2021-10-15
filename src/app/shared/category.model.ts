export class Category {
    constructor(public name: string, public subCategories: Category[]) {}
}