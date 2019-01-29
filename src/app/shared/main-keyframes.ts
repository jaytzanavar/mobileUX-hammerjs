import { keyframes, style } from '@angular/animations';


export const swipeOutLeft = [
    style({ transform: ' translate3d(0px, 0, 0)', opacity: 0.9, offset: 0 }),
    style({ transform: ' translate3d(-200px, 0, 0)', offset: .6 }),
    style({ transform: ' translate3d(-400px, 0, 0)', offset: .74 }),
    style({ transform: ' translate3d(-100%, 0, 0)', opacity: 0, offset: .9 }),
    style({ transform: 'none', offset: 1 })
]


export const swipeInRight = [
    style({ transform: ' translate3d(-100%, 0, 0)', opacity: 0, offset: 0 }),
    style({ transform: ' translate3d(0, 0, 0)', opacity: 0.5, offset: .2 }),
    style({ transform: ' translate3d(0, 0, 0)', opacity: 0.9, offset: .55 }),
    style({ transform: 'none', offset: 1 })
]