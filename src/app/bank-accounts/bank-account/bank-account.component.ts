import { BankAccountService } from './../../shared/bank-account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styles: [],
})
export class BankAccountComponent implements OnInit {
  constructor(
    public service: BankAccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      Id: 0,
      DateCreated: '',
      DepositorId: '',
      Name: '',
      AccountNumber: '',
      Description: '',
      InitialAmount: 0,
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postBankAccount().subscribe(
      (res) => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Bank Account Register');
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putBankAccount().subscribe(
      (res) => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Bank Account Register');
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
