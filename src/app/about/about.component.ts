import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations : [
    trigger('onLoad',[
      transition(':enter',[
        style({
          opacity : 0,
          transform : 'translateX(-100%)'
      }), animate('1s ease-out')])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
