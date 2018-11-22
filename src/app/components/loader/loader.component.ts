import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
