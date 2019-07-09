import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchService } from '../core/services/search/search.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
