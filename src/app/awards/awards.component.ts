import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  animations : [
    trigger('onLoad',[
      transition(':enter',[
        style({
          opacity : 0,
          transform : 'translateY(-100%)'
      }), animate('1s ease-out')])
    ])
  ]
})
export class AwardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
