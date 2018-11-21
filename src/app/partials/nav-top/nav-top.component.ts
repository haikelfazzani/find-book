import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

  hideHeader : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  hideShow() {
    if(this.hideHeader) this.hideHeader = false;
    else this.hideHeader = true;
  }

}
