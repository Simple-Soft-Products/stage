import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { UiModule } from './ui/ui.module';

const routes: Route[] = [
	{ path: 'start', title: 'Start', loadChildren: () => import('./start/start.module').then(m => m.StartModule) },
	{ path: 'stage', title: 'Stage', loadChildren: () => import('./internship/internship.module').then(m => m.InternshipModule) },
	{ path: '', redirectTo: 'start', pathMatch: 'full' },
	{ path: '**', title: '404', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		RouterModule.forRoot(routes),
		UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
