import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search } from '../../models/search';
import { SearchService } from '../../core/services/search/search.service';
import { Video } from '../../models/video';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  search: Search;
  videos: Video[] = [];
  searchFlag: boolean;
  searhTerm = '';
  urlPath = '';
  movieType = '';

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {
    this.searchForm = formBuilder.group({
      'searchTerm': [null, Validators.required]
    });
   }

   setSearchFlag(input: boolean) {
     this.searchFlag = input;
   }

   getSearchFlag(): boolean {
     return this.searchFlag;
   }

  onSubmit(search) {
    this.setSearchFlag(true);
    this.searchService.videoSearch(search.searchTerm)
    .subscribe(videos => {
      videos.forEach(video => {
        const path = video.path;
        const extension = path.split('.').pop();
        video.movieType = 'video/' + extension;
        this.videos.push(video);
      });
    });
    console.log(this.getSearchFlag());
  }

  searchTermPresent(): Boolean {
    const isValid = this.searchForm.get('searchTerm').valid;
    return isValid;
  }

  searched(): boolean {
    return this.getSearchFlag();
  }

  ngOnInit() {
  }

}
