import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5> Buscar: </h5>
  <input
    type="text"
    class="form-control"
    placeholder="Search gifts"
    (keyup.enter) = "searchTag()"
    #txtTagInput
    >
  `,
  standalone: false,
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor( private GifsService: GifsService ) { }

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchTag( newTag );
    // console.log({  newTag });

    this.tagInput.nativeElement.value = '';

  }

}
