import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: EditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EditPageRoutingModule {}

