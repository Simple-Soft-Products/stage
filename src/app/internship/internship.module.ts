import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InternshipComponent } from './internship.component';
import { CardModule } from 'primeng/card';

const routes: Route[] = [
	{ path: '', component: InternshipComponent }
]

@NgModule({
  declarations: [
		InternshipComponent
	],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
		CardModule
  ]
})
export class InternshipModule { }
