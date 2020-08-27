import { BankAccount } from './bank-account.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BankAccountService {
  formData: BankAccount = {
    Id: null,
    DateCreated: null,
    Name: null,
    AccountNumber: null,
    DepositorId: null,
    Description: null,
    InitialAmount: null,
  };
  readonly rootURL = 'https://localhost:44340/api/v1';
  list: BankAccount[];

  constructor(private http: HttpClient) {}

  postBankAccount() {
    return this.http.post(this.rootURL + '/BankAccount', this.formData);
  }
  putBankAccount() {
    console.log(this.formData);
    return this.http.put(
      this.rootURL + '/BankAccount/' + this.formData.Id,
      this.formData
    );
  }
  deleteBankAccount(id) {
    return this.http.delete(this.rootURL + '/BankAccount/' + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + '/BankAccount')
      .toPromise()
      .then((res) => (this.list = res as BankAccount[]));
  }
}
