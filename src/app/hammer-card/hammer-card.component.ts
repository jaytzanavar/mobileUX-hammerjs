import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { trigger, keyframes, animate, transition, state, style } from '@angular/animations';
import * as kf from './keyframes';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-hammer-card',
  templateUrl: './hammer-card.component.html',
  styleUrls: ['./hammer-card.component.css'],
  animations: [
    trigger('cardAnimator', [
      state('slideOutLeft', style({
        transform: 'translate3d(-150px, 0, 0)'
      })),
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1500, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1500, keyframes(kf.swipeOuteLeft))),
      transition('* => slideOutRight', animate(1000, keyframes(kf.swipeOuteRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
})
export class HammerCardComponent implements OnInit {
  animationSubscription: any;
  @Input() enableContent: Subject<any>;

  animationState: string;



  constructor() {

    this.animationSubscription = 'wobble';



  }

  ngOnInit() {
    this.enableContent.subscribe(event => {
      // called when the notifyChildren method is
      // called in the parent component
      setTimeout(() => {
        this.animationState = 'jello';
      }, 1000);

    });

  }




  startAnimation(stateClick) {
    console.log(this.enableContent);
    this.animationState = stateClick;
    console.log(this.animationState, stateClick);
    if (!this.animationState) {
      this.animationState = stateClick;
    }
  }


  resetAnimationState() {
    console.log('reset');
    this.animationState = '';
  }



}
