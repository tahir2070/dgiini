import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { FinanceComponent } from './finance/finance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './about/privacy/privacy.component';
import { TocComponent } from './about/toc/toc.component';
import { PageNotFoundComponent } from './about/pageNotFound/pageNotFound.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      TasksComponent,
      BrowseComponent,
      ProfileComponent,
      SettingsComponent,
      SupportComponent,
      FinanceComponent,
      TransactionsComponent,
      StatisticsComponent,
      AboutComponent,
      PrivacyComponent,
      TocComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
