import { BankAccountService } from './../../shared/bank-account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styles: [],
})
export class BankAccountListComponent implements OnInit {
  constructor(public service: BankAccountService) {}

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteBankAccount(Id).subscribe(
        (res) => {
          this.service.refreshList();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
