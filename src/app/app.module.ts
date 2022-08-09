import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MyNavComponent } from './common/my-nav/my-nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeroBannerComponent } from './common/hero-banner/hero-banner.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SampleWorksComponent } from './components/sample-works/sample-works.component';
import { MyobserverDirective } from './myobserver.directive';
import { TrackVisibilityDirective } from './intersection-observer.directive';
import { BrowserAnimationsModule } 
  from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    GoalsComponent,
    SkillsComponent,
    MyNavComponent,
    ServicesComponent,
    FooterComponent,
    HeroBannerComponent,
    TestimonialsComponent,
    SampleWorksComponent,
    MyobserverDirective,
    TrackVisibilityDirective,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
