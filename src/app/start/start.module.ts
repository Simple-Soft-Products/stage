import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { Route, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

const routes: Route[] = [
	{ path: '', component: StartComponent }
]

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
		CardModule,
		ButtonModule
  ]
})
export class StartModule { }
