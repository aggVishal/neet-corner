import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll'
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { StatsComponent } from './stats/stats.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TestSeriesComponent } from './test-series/test-series.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { CommunityComponent } from './community/community.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { RefundPolicyComponent } from './policy/refund-policy/refund-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestimonialComponent,
    FooterComponent,
    BannerComponent,
    StatsComponent,
    ScheduleComponent,
    TestSeriesComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    CommunityComponent,
    AboutComponent,
    CoursesComponent,
    CoursesPageComponent,
    RefundPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    NgxPageScrollModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
