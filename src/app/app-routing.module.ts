import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { BuyComponent } from './views/buy/buy.component';
import { MainComponent } from './views/main/main.component';
import { TermsComponent } from './views/terms/terms.component';
 
const routes: Routes = [
   { path: 'main', component: MainComponent },
   { path: '', redirectTo: '/main', pathMatch: 'full'  },
   { path: 'about-us', component: AboutUsComponent },
   { path: 'terms', component: TermsComponent },
   { path: 'buy', component: BuyComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
