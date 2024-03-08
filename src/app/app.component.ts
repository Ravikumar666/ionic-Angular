import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  expense: string = '';
  amount: string = '';
  results: any = [];
  total: number = 0;
  constructor() {}

  ngOnInit() {
    console.log(this.expense, this.amount);
  }

  clear() {
    this.expense = '';
    this.amount = '';
  }

  addExpense() {
    if (this.disbleAddbtn) return;
    this.results.push({ expense: this.expense.trim(), amount: this.amount });
    this.total = parseFloat(this.amount) + this.total;
    this.clear();
  }

  onInputChange(event: any) {
    this.amount = event.target.value.replace(/[^\d.]/g, '');
  }

  get disbleAddbtn(): boolean {
    return this.expense.trim().length <= 0 || this.amount.trim().length <= 0;
  }
}
