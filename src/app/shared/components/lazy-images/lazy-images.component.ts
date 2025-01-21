import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-images',
  templateUrl: './lazy-images.component.html',
  standalone: false,
})
export class LazyImagesComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt:string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {

    if ( !this.url ) throw new Error('Url property is required');
    // if ( !this.alt ) throw new Error('Alt property is required');

  }

  onLoad() {
    // console.log('Image Loaded');

    setTimeout(() => {

      this.hasLoaded = true;
    },
  ), 1000;

  }



}
