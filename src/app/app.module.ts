import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BankAccountService } from './shared/bank-account.service';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { BankAccountComponent } from './bank-accounts/bank-account/bank-account.component';
import { BankAccountListComponent } from './bank-accounts/bank-account-list/bank-account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountsComponent,
    BankAccountComponent,
    BankAccountListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [BankAccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
