import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestSeriesComponent } from './test-series/test-series.component';

const routes: Routes = [
  {
    path: 'test-series', component: TestSeriesComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
