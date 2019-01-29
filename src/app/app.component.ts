import { Component } from '@angular/core';
import { trigger, keyframes, animate, transition, state, style } from '@angular/animations';
import * as kf from './shared/main-keyframes';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideAnimator', [
      state('slideOutLeft', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.swipeOutLeft))),
      state('slideInRight', style({
        transform: 'translate3d(0, 0, 0)',
        opacity: '0.9'
      })),
      transition('* => slideInRight', animate(1000, keyframes(kf.swipeInRight)))
    ])
  ]
})

export class AppComponent {
  title = 'touchApp';
  animationState = '';
  unslideState = '';


  constructor() {
    this.animationState = 'slideOutLeft';
    this.notifyChildren();
  }

  parentSubject: Subject<any> = new Subject();

  notifyChildren() {
    this.parentSubject.next(this.animationState);
  }

  startAnimation(stateClick) {
    this.animationState = stateClick;
    console.log(this.animationState, stateClick);
    if (!this.animationState) {
      this.animationState = stateClick;
    }
    if (this.animationState === 'slideOutLeft') {
      this.notifyChildren();
    }
  }


  resetAnimationState() {
    console.log('reset');
    this.animationState = '';
  }

}
