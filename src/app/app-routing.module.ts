import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestSeriesComponent } from './test-series/test-series.component';
import { RefundPolicyComponent } from './policy/refund-policy/refund-policy.component';

const routes: Routes = [
  {
    path: 'test-series', component: TestSeriesComponent
  },
  {
    path: 'refund-policy', component: RefundPolicyComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
