import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifService: GifsService ){
  }

  searchTag( tag: string ): void{
    // const newButtonTag = this.buttonTag;
    this.gifService.searchTag( tag );

  }

  getTags(): string[] {
    return this.gifService.tagsHistory;
  }


}
