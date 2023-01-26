import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InternshipComponent } from './internship.component';

const routes: Route[] = [
	{ path: '', component: InternshipComponent }
]

@NgModule({
  declarations: [
		InternshipComponent
	],
  imports: [
    CommonModule,
		RouterModule.forChild(routes)
  ]
})
export class InternshipModule { }
