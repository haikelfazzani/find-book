import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html'
})
export class NavTopComponent implements OnInit {

  hideHeader : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  hideShow() {
    this.hideHeader = this.hideHeader === true ? false :  true;
  }

}
