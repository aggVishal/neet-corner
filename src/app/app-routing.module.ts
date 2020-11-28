import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { TestSeriesComponent } from './test-series/test-series.component';
import { RefundPolicyComponent } from './policy/refund-policy/refund-policy.component';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';

const routes: Routes = [
  {
    path: 'test-series', component: TestSeriesComponent
  },
  {
    path: 'courses-page/:id', component: CoursesPageComponent
  },
  {
    path: 'refund-policy', component: RefundPolicyComponent
  },
  {
    path: '', component: MainHomeComponent
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
