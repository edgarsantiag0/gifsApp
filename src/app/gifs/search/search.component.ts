import { Component, ElementRef, ViewChild } from '@angular/core';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('searchText') searchText!:ElementRef<HTMLInputElement>;

  /**
   *
   */
  constructor(private gifsService: GifsService) {}

  search(){

    const searchTerm = this.searchText.nativeElement.value;

    if(searchTerm.trim().length === 0){
      return;
    }

    this.gifsService.searchGifs(searchTerm);

    this.searchText.nativeElement.value = '';
  }

 

}
