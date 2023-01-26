import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { Route, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

const routes: Route[] = [
	{ path: '', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
		ButtonModule
  ]
})
export class NotFoundModule { }
