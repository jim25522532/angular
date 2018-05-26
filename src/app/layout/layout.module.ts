import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavComponent, FooterComponent, MainComponent],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
