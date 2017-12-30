import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-page',
  templateUrl: './drag.drop.page.html',
  styleUrls: ['./drag.drop.page.scss'],
  host:{
    'class':'app-body flex-col'
  }
})
export class DragDropPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
