import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class LoginModule { }
