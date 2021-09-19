import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BuyComponent } from './buy/buy.component';



@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    BuyComponent,
    AboutUsComponent,
    MainComponent
  ]
})
export class ViewsModule { }
