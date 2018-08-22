import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations : [
    trigger('onLoad',[
      transition(':enter',[
        style({
          transform : 'translateX(100%)'
      }), animate('1s ease-out')])
    ])
  ]
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
