import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page/edit-page.component';
import { EditPageRoutingModule } from './edit-page.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditPageComponent
  ]
})
export class EditPageModule { }
