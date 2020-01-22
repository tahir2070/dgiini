import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'toc', component: TocComponent },
  { path: '**', redirectTo: '404' },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
