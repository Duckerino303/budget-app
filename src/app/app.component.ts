import { Component } from '@angular/core';
import { Account, AccountTypes } from './shared/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My budgeting app';

  accounts: Account[] = [
    new Account("Millennium ROR", "", AccountTypes.Asset, 2800, true),
    new Account("Millennium Savings", "", AccountTypes.Asset, 12000, true)
  ];

  getTotalBalance(): number {
    let total = 0;
    this.accounts.forEach(function(account) {
      total += account.balance;
    });
    return total;
  }
}
